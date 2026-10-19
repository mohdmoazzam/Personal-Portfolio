import nodemailer from "nodemailer";
import { env } from "../config/env.js";

const CONNECTION_TIMEOUT_MS = 10_000;

const transporter = nodemailer.createTransport({
  host: env.MAIL_HOST,
  port: env.MAIL_PORT,
  secure: env.MAIL_SECURE ? env.MAIL_SECURE === "true" : env.MAIL_PORT === 465,
  auth: {
    user: env.MAIL_USER,
    pass: env.MAIL_PASS,
  },
  pool: true,
  // Fail fast instead of nodemailer's 2 minute default when SMTP is unreachable.
  connectionTimeout: CONNECTION_TIMEOUT_MS,
  greetingTimeout: CONNECTION_TIMEOUT_MS,
  socketTimeout: 20_000,
});

export interface MailOptions {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}

export const sendMail = async (options: MailOptions) => {
  await transporter.sendMail({
    from: { name: env.MAIL_FROM_NAME, address: env.MAIL_USER },
    ...options,
  });
};

export const verifyMailer = () => transporter.verify();

export const closeMailer = () => transporter.close();
