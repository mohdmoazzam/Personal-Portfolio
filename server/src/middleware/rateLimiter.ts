import { rateLimit } from "express-rate-limit";

/** Limits each IP to 5 contact messages per 15 minutes to prevent spam. */
export const contactRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many messages sent. Please try again in a few minutes.",
  },
});
