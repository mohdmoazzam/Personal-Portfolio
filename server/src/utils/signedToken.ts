import { createHmac, timingSafeEqual } from "node:crypto";
import { env } from "../config/env.js";

/**
 * Minimal stateless signed tokens: base64url(JSON payload) + "." + HMAC-SHA256 signature.
 * Payloads are readable by the client, so never put secrets in them.
 */

const sign = (data: string) =>
  createHmac("sha256", env.VERIFICATION_SECRET).update(data).digest("base64url");

export const safeEqual = (a: string, b: string) => {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
};

export const createToken = (payload: Record<string, unknown>, ttlSeconds: number) => {
  const exp = Math.floor(Date.now() / 1000) + ttlSeconds;
  const body = Buffer.from(JSON.stringify({ ...payload, exp })).toString("base64url");
  return `${body}.${sign(body)}`;
};

/** Returns the payload if the signature is valid and the token hasn't expired, otherwise null. */
export const readToken = (token: string): Record<string, unknown> | null => {
  const [body, signature, ...rest] = token.split(".");
  if (!body || !signature || rest.length > 0 || !safeEqual(sign(body), signature)) {
    return null;
  }

  try {
    const payload: unknown = JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
    if (
      typeof payload !== "object" ||
      payload === null ||
      typeof (payload as { exp?: unknown }).exp !== "number" ||
      (payload as { exp: number }).exp < Math.floor(Date.now() / 1000)
    ) {
      return null;
    }
    return payload as Record<string, unknown>;
  } catch {
    return null;
  }
};
