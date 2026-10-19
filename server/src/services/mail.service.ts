import { setTimeout as sleep } from "node:timers/promises";
import { env } from "../config/env.js";

/**
 * Sends email through EmailJS over HTTPS, which works on hosts that block outbound SMTP
 * (e.g. Render's free plan). EmailJS delivers it from the Gmail account connected to the
 * service. A single generic template renders the HTML we build here.
 */

const SEND_URL = "https://api.emailjs.com/api/v1.0/email/send";
const REQUEST_TIMEOUT_MS = 10_000;
// EmailJS allows 1 request per second, so sends are queued with a small safety margin.
const MIN_INTERVAL_MS = 1100;

export interface MailOptions {
  to: string;
  subject: string;
  html: string;
  /** Plain-text version; EmailJS generates its own, so this isn't sent. */
  text: string;
  replyTo?: string;
}

let queue: Promise<unknown> = Promise.resolve();
let lastSentAt = 0;

const enqueue = <T>(task: () => Promise<T>): Promise<T> => {
  const run = queue.then(async () => {
    const wait = lastSentAt + MIN_INTERVAL_MS - Date.now();
    if (wait > 0) await sleep(wait);
    try {
      return await task();
    } finally {
      lastSentAt = Date.now();
    }
  });
  queue = run.catch(() => {});
  return run;
};

export const sendMail = (options: MailOptions) =>
  enqueue(async () => {
    const response = await fetch(SEND_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        service_id: env.EMAILJS_SERVICE_ID,
        template_id: env.EMAILJS_TEMPLATE_ID,
        user_id: env.EMAILJS_PUBLIC_KEY,
        accessToken: env.EMAILJS_PRIVATE_KEY,
        template_params: {
          to_email: options.to,
          subject: options.subject,
          html: options.html,
          reply_to: options.replyTo ?? "",
          from_name: env.MAIL_FROM_NAME,
        },
      }),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });

    if (!response.ok) {
      throw new Error(`EmailJS ${response.status}: ${await response.text()}`);
    }
  });
