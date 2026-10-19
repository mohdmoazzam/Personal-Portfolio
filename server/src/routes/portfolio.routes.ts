import { Router } from "express";
import { sendEmail } from "../controllers/portfolio.controller.js";
import { contactRateLimiter } from "../middleware/rateLimiter.js";
import { validateBody } from "../middleware/validate.js";
import { contactSchema } from "../validators/contact.schema.js";

const router = Router();

router.post("/sendEmail", contactRateLimiter, validateBody(contactSchema), sendEmail);

export default router;
