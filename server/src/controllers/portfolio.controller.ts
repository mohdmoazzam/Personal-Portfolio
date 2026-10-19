import type { Request, Response } from "express";
import { env } from "../config/env.js";
import { isVerifiedFor } from "../services/emailVerification.service.js";
import { sendMail } from "../services/mail.service.js";
import {
  ownerNotificationEmail,
  senderConfirmationEmail,
} from "../templates/contact.templates.js";
import type { ContactInput } from "../validators/contact.schema.js";

export const sendEmail = async (req: Request<unknown, unknown, ContactInput>, res: Response) => {
  const contact = req.body;

  if (!isVerifiedFor(contact.verificationToken, contact.email)) {
    res.status(403).json({
      success: false,
      message: "Please verify your email before sending a message.",
    });
    return;
  }

  // The owner notification is the essential delivery: if it fails, the request fails.
  try {
    await sendMail({
      to: env.OWNER_EMAIL,
      replyTo: contact.email,
      ...ownerNotificationEmail(contact),
    });
  } catch (error) {
    console.error("Failed to deliver contact message to owner:", error);
    res.status(502).json({
      success: false,
      message: "Your message couldn't be sent right now. Please try again later.",
    });
    return;
  }

  // The confirmation is best effort, so it's sent in the background without delaying the response.
  sendMail({ to: contact.email, ...senderConfirmationEmail(contact) }).catch((error) =>
    console.warn(`Failed to send confirmation email to ${contact.email}:`, error)
  );

  res.status(200).json({
    success: true,
    message: "Thanks! Your message has been sent.",
  });
};
