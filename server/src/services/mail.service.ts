import { env } from "../config/env.js";

/**
 * Sends email through Brevo's transactional API over HTTPS, which works on hosts that block
 * outbound SMTP (e.g. Render's free plan). The sender address must be verified in Brevo.
 */

const SEND_URL = "https://api.brevo.com/v3/smtp/email";
const REQUEST_TIMEOUT_MS = 10_000;

export interface MailOptions {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}

export const sendMail = async (options: MailOptions) => {
  const response = await fetch(SEND_URL, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": env.BREVO_API_KEY,
    },
    body: JSON.stringify({
      sender: { name: env.MAIL_FROM_NAME, email: env.MAIL_FROM_EMAIL ?? env.OWNER_EMAIL },
      to: [{ email: options.to }],
      subject: options.subject,
      htmlContent: options.html,
      textContent: options.text,
      ...(options.replyTo && { replyTo: { email: options.replyTo } }),
    }),
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(`Brevo ${response.status}: ${await response.text()}`);
  }
};
