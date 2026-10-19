import { z } from "zod";

const emailField = z
  .string({ required_error: "Please provide your email" })
  .trim()
  .toLowerCase()
  .min(1, "Please provide your email")
  .max(254, "Email is too long")
  .email("Please provide a valid email address");

const tokenField = (message: string) =>
  z.string({ required_error: message }).min(1, message).max(2000, "Invalid token");

export const sendCodeSchema = z.object({
  email: emailField,
});

export const verifyCodeSchema = z.object({
  email: emailField,
  code: z
    .string({ required_error: "Please enter the verification code" })
    .trim()
    .regex(/^\d{6}$/, "The verification code must be 6 digits"),
  challengeToken: tokenField("Please request a verification code first"),
});

export const contactSchema = z.object({
  name: z
    .string({ required_error: "Please provide your name" })
    .trim()
    .min(1, "Please provide your name")
    .max(100, "Name must be 100 characters or fewer")
    // Collapse line breaks so the name is safe to use in an email subject.
    .transform((value) => value.replace(/\s+/g, " ")),
  email: emailField,
  msg: z
    .string({ required_error: "Please write a message" })
    .trim()
    .min(1, "Please write a message")
    .max(5000, "Message must be 5000 characters or fewer"),
  verificationToken: tokenField("Please verify your email before sending a message"),
});

export type SendCodeInput = z.infer<typeof sendCodeSchema>;
export type VerifyCodeInput = z.infer<typeof verifyCodeSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
