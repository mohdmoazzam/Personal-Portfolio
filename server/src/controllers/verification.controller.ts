import type { Request, Response } from "express";
import { sendMail } from "../services/mail.service.js";
import { canReceiveMail, isDisposableEmail } from "../services/emailDomain.service.js";
import {
  CODE_TTL_SECONDS,
  VERIFIED_TTL_SECONDS,
  createChallenge,
  createVerifiedToken,
  isChallengeSolved,
} from "../services/emailVerification.service.js";
import { verificationCodeEmail } from "../templates/contact.templates.js";
import type { SendCodeInput, VerifyCodeInput } from "../validators/contact.schema.js";

export const sendVerificationCode = async (
  req: Request<unknown, unknown, SendCodeInput>,
  res: Response
) => {
  const { email } = req.body;

  if (isDisposableEmail(email)) {
    res.status(400).json({
      success: false,
      message: "Temporary or disposable email addresses aren't allowed. Please use your real email.",
    });
    return;
  }

  if (!(await canReceiveMail(email))) {
    res.status(400).json({
      success: false,
      message: "This email domain can't receive mail. Please check the address.",
    });
    return;
  }

  const { code, challengeToken } = createChallenge(email);

  try {
    await sendMail({ to: email, ...verificationCodeEmail(code, CODE_TTL_SECONDS / 60) });
  } catch (error) {
    console.error(`Failed to send verification code to ${email}:`, error);
    res.status(502).json({
      success: false,
      message: "We couldn't send a code to that address. Please check it and try again.",
    });
    return;
  }

  res.status(200).json({
    success: true,
    message: `We've sent a 6-digit code to ${email}`,
    challengeToken,
    expiresIn: CODE_TTL_SECONDS,
  });
};

export const verifyCode = (req: Request<unknown, unknown, VerifyCodeInput>, res: Response) => {
  const { email, code, challengeToken } = req.body;

  if (!isChallengeSolved(challengeToken, email, code)) {
    res.status(400).json({
      success: false,
      message: "That code is incorrect or has expired. Please try again or request a new one.",
    });
    return;
  }

  res.status(200).json({
    success: true,
    message: "Email verified",
    verificationToken: createVerifiedToken(email),
    expiresIn: VERIFIED_TTL_SECONDS,
  });
};
