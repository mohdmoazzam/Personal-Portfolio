import { Router } from "express";
import { sendEmail } from "../controllers/portfolio.controller.js";
import { sendVerificationCode, verifyCode } from "../controllers/verification.controller.js";
import {
  contactRateLimiter,
  sendCodeRateLimiter,
  verifyCodeRateLimiter,
} from "../middleware/rateLimiter.js";
import { validateBody } from "../middleware/validate.js";
import { contactSchema, sendCodeSchema, verifyCodeSchema } from "../validators/contact.schema.js";

const router = Router();

router.post(
  "/verification/send",
  sendCodeRateLimiter,
  validateBody(sendCodeSchema),
  sendVerificationCode
);
router.post("/verification/verify", verifyCodeRateLimiter, validateBody(verifyCodeSchema), verifyCode);
router.post("/sendEmail", contactRateLimiter, validateBody(contactSchema), sendEmail);

export default router;
