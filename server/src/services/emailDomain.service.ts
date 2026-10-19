import { promises as dns } from "node:dns";
import * as MailChecker from "mailchecker";

const DNS_TIMEOUT_MS = 5000;
const MISSING_DOMAIN_CODES = new Set(["ENOTFOUND", "ENODATA", "NXDOMAIN"]);

/** True for throwaway inboxes such as mailinator.com or 10minutemail.com. */
export const isDisposableEmail = (email: string) => !MailChecker.isValid(email);

/**
 * True when the email's domain is set up to receive mail (has usable MX records).
 * DNS outages or timeouts don't block the user: only a definite "no mail server" does.
 */
export const canReceiveMail = async (email: string): Promise<boolean> => {
  const domain = email.split("@")[1];
  if (!domain) return false;

  try {
    const records = await Promise.race([
      dns.resolveMx(domain),
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(Object.assign(new Error("DNS timeout"), { code: "ETIMEOUT" })), DNS_TIMEOUT_MS).unref()
      ),
    ]);
    // A "null MX" (RFC 7505) record explicitly declares that the domain accepts no mail.
    return records.some((record) => record.exchange && record.exchange !== ".");
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code ?? "";
    return !MISSING_DOMAIN_CODES.has(code);
  }
};
