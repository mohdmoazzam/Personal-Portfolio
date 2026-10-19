import type { ErrorRequestHandler, RequestHandler } from "express";

export const notFoundHandler: RequestHandler = (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.originalUrl} not found`,
  });
};

interface HttpError extends Error {
  status?: number;
  type?: string;
}

export const errorHandler: ErrorRequestHandler = (err: HttpError, _req, res, _next) => {
  if (err.type === "entity.parse.failed") {
    res.status(400).json({ success: false, message: "Request body must be valid JSON" });
    return;
  }
  if (err.type === "entity.too.large") {
    res.status(413).json({ success: false, message: "Request body is too large" });
    return;
  }

  console.error(err);
  res.status(500).json({
    success: false,
    message: "Something went wrong, please try again later.",
  });
};
