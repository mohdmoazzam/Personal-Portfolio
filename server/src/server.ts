import { createApp } from "./app.js";
import { env } from "./config/env.js";
import { closeMailer, verifyMailer } from "./services/mail.service.js";

const app = createApp();

const server = app.listen(env.PORT, (error?: Error) => {
  if (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
  console.log(`Server running on port ${env.PORT} (${env.NODE_ENV})`);
});

verifyMailer()
  .then(() => console.log("SMTP connection verified"))
  .catch((error: Error) =>
    console.warn(`SMTP verification failed, emails may not send: ${error.message}`)
  );

const shutdown = (signal: string) => {
  console.log(`${signal} received, shutting down...`);
  server.close(() => {
    closeMailer();
    process.exit(0);
  });
  setTimeout(() => process.exit(1), 10_000).unref();
};

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
