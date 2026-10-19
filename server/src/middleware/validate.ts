import type { RequestHandler } from "express";
import type { ZodTypeAny } from "zod";

/** Validates and normalises req.body, responding 400 with the first issue on failure. */
export const validateBody =
  (schema: ZodTypeAny): RequestHandler =>
  (req, res, next) => {
    const result = schema.safeParse(req.body ?? {});
    if (!result.success) {
      res.status(400).json({
        success: false,
        message: result.error.issues[0]?.message ?? "Invalid request",
      });
      return;
    }
    req.body = result.data;
    next();
  };
