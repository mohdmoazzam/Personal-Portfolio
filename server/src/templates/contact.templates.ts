import { escapeHtml, toHtmlParagraph } from "../utils/escapeHtml.js";
import type { ContactInput } from "../validators/contact.schema.js";

const OWNER_NAME = "Mohd Moazzam";
const GITHUB_URL = "https://github.com/mohdmoazzam";
const LINKEDIN_URL = "https://linkedin.com/in/mohd-moazzam";

interface RenderedEmail {
  subject: string;
  html: string;
  text: string;
}

const layout = (heading: string, body: string) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${heading}</title>
  </head>
  <body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif;color:#3f3f46;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e4e4e7;">
            <tr>
              <td style="height:6px;background:linear-gradient(90deg,#14b8a6,#22d3ee,#fb923c);background-color:#14b8a6;"></td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <p style="margin:0 0 4px;font-size:20px;font-weight:bold;color:#18181b;">MDM<span style="color:#fb923c;">.</span></p>
                <h1 style="margin:16px 0 20px;font-size:22px;line-height:1.3;color:#18181b;">${heading}</h1>
                ${body}
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;background:#fafafa;border-top:1px solid #e4e4e7;font-size:12px;color:#71717a;">
                ${OWNER_NAME} &middot; Full-Stack Developer &middot;
                <a href="${GITHUB_URL}" style="color:#0d9488;">GitHub</a> &middot;
                <a href="${LINKEDIN_URL}" style="color:#0d9488;">LinkedIn</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

const messageBlock = (message: string) =>
  `<div style="margin:0 0 20px;padding:16px;border-left:4px solid #14b8a6;background:#f0fdfa;border-radius:8px;font-size:15px;line-height:1.6;color:#27272a;">${toHtmlParagraph(
    message
  )}</div>`;

/** One-time code that proves the sender owns their email address. */
export const verificationCodeEmail = (code: string, validForMinutes: number): RenderedEmail => ({
  subject: `${code} is your verification code`,
  html: layout(
    "Verify your email",
    `<p style="margin:0 0 16px;font-size:15px;line-height:1.6;">Use this code to verify your email and send your message to ${OWNER_NAME}:</p>
     <p style="margin:0 0 20px;padding:16px;text-align:center;font-size:32px;font-weight:bold;letter-spacing:10px;color:#0f766e;background:#f0fdfa;border-radius:12px;">${code}</p>
     <p style="margin:0;font-size:13px;color:#71717a;">This code expires in ${validForMinutes} minutes. If you didn't request it, you can safely ignore this email.</p>`
  ),
  text: `Your verification code is ${code}\n\nIt expires in ${validForMinutes} minutes. If you didn't request it, you can safely ignore this email.\n`,
});

/** Notification delivered to the portfolio owner. */
export const ownerNotificationEmail = ({ name, email, msg }: ContactInput): RenderedEmail => {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);

  return {
    subject: `New portfolio message from ${name}`,
    html: layout(
      "You have a new message",
      `<p style="margin:0 0 6px;font-size:15px;"><strong>Name:</strong> ${safeName}</p>
       <p style="margin:0 0 20px;font-size:15px;"><strong>Email:</strong> <a href="mailto:${safeEmail}" style="color:#0d9488;">${safeEmail}</a></p>
       ${messageBlock(msg)}
       <p style="margin:0;font-size:13px;color:#71717a;">Reply to this email to respond to ${safeName} directly.</p>`
    ),
    text: `New portfolio message\n\nName: ${name}\nEmail: ${email}\n\n${msg}\n`,
  };
};

/** Confirmation delivered to the person who filled in the form. */
export const senderConfirmationEmail = ({ name, msg }: ContactInput): RenderedEmail => {
  const safeName = escapeHtml(name);

  return {
    subject: `Thanks for reaching out, ${name}`,
    html: layout(
      `Thanks for reaching out, ${safeName}!`,
      `<p style="margin:0 0 16px;font-size:15px;line-height:1.6;">I've received your message and will get back to you as soon as possible. Here's a copy of what you sent:</p>
       ${messageBlock(msg)}
       <p style="margin:0;font-size:15px;line-height:1.6;">Best regards,<br /><strong>${OWNER_NAME}</strong></p>`
    ),
    text: `Hi ${name},\n\nThanks for reaching out! I've received your message and will get back to you as soon as possible.\n\nYour message:\n${msg}\n\nBest regards,\n${OWNER_NAME}\n`,
  };
};
