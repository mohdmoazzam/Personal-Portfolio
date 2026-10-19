import { rateLimit } from "express-rate-limit";

const FIFTEEN_MINUTES = 15 * 60 * 1000;

const createLimiter = (limit: number, message: string) =>
  rateLimit({
    windowMs: FIFTEEN_MINUTES,
    limit,
    standardHeaders: "draft-7",
    legacyHeaders: false,
    message: { success: false, message },
  });

/** Limits each IP to 5 contact messages per 15 minutes to prevent spam. */
export const contactRateLimiter = createLimiter(
  5,
  "Too many messages sent. Please try again in a few minutes."
);

/** Limits verification emails so the form can't be used to flood someone's inbox. */
export const sendCodeRateLimiter = createLimiter(
  5,
  "Too many verification codes requested. Please try again in a few minutes."
);

/** Limits code attempts so the 6-digit code can't be brute forced. */
export const verifyCodeRateLimiter = createLimiter(
  10,
  "Too many verification attempts. Please try again in a few minutes."
);
