import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string({ required_error: "Please provide your name" })
    .trim()
    .min(1, "Please provide your name")
    .max(100, "Name must be 100 characters or fewer")
    // Collapse line breaks so the name is safe to use in an email subject.
    .transform((value) => value.replace(/\s+/g, " ")),
  email: z
    .string({ required_error: "Please provide your email" })
    .trim()
    .min(1, "Please provide your email")
    .max(254, "Email is too long")
    .email("Please provide a valid email address"),
  msg: z
    .string({ required_error: "Please write a message" })
    .trim()
    .min(1, "Please write a message")
    .max(5000, "Message must be 5000 characters or fewer"),
});

export type ContactInput = z.infer<typeof contactSchema>;
