import cors from "cors";
import express from "express";
import helmet from "helmet";
import { env } from "./config/env.js";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler.js";
import portfolioRoutes from "./routes/portfolio.routes.js";

export const createApp = () => {
  const app = express();

  app.disable("x-powered-by");
  app.set("trust proxy", env.TRUST_PROXY);

  app.use(helmet());
  app.use(
    cors({
      origin: env.CORS_ORIGINS.includes("*") ? true : env.CORS_ORIGINS,
      methods: ["GET", "POST"],
    })
  );
  app.use(express.json({ limit: "20kb" }));

  app.get("/", (_req, res) => {
    res.json({ success: true, message: "Server is up and running" });
  });

  app.get("/health", (_req, res) => {
    res.json({ status: "ok", uptime: Math.round(process.uptime()) });
  });

  app.use("/api/v1/portfolio", portfolioRoutes);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
};
