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

  MAIL_HOST: z.string().min(1),
  MAIL_PORT: z.coerce.number().int().positive().default(587),
  MAIL_SECURE: z.enum(["true", "false"]).optional(),
  MAIL_USER: z.string().min(1),
  MAIL_PASS: z.string().min(1),
  MAIL_FROM_NAME: z.string().min(1).default("Mohd Moazzam"),
  OWNER_EMAIL: z.string().email(),
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
