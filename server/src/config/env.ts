import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  PORT: z.coerce.number().int().positive().default(8080),
  CORS_ORIGINS: z
    .string()
    .default("http://localhost:3000,http://localhost:3001")
    .transform((value) =>
      value
        .split(",")
        .map((origin) => origin.trim())
        .filter(Boolean)
    ),
  TRUST_PROXY: z.coerce.number().int().min(0).default(0),

  // Brevo (app.brevo.com): SMTP & API > API keys. The sender must be verified under Senders.
  BREVO_API_KEY: z.string().min(1),
  MAIL_FROM_NAME: z.string().min(1).default("Mohd Moazzam"),
  // Defaults to OWNER_EMAIL when unset.
  MAIL_FROM_EMAIL: z.preprocess((value) => value || undefined, z.string().email().optional()),
  OWNER_EMAIL: z.string().email(),

  VERIFICATION_SECRET: z
    .string()
    .min(32, "VERIFICATION_SECRET must be at least 32 characters"),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error("Invalid environment configuration:");
  for (const issue of parsed.error.issues) {
    console.error(`  - ${issue.path.join(".")}: ${issue.message}`);
  }
  process.exit(1);
}

export const env = parsed.data;
export const isProduction = env.NODE_ENV === "production";
