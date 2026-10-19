import { createHmac, randomInt } from "node:crypto";
import { env } from "../config/env.js";
import { createToken, readToken, safeEqual } from "../utils/signedToken.js";

export const CODE_TTL_SECONDS = 10 * 60;
export const VERIFIED_TTL_SECONDS = 30 * 60;

const hashCode = (email: string, code: string) =>
  createHmac("sha256", env.VERIFICATION_SECRET).update(`code:${email}:${code}`).digest("hex");

/**
 * Creates a one-time code and a challenge token that carries a keyed hash of it,
 * so the code can be checked later without storing anything on the server.
 */
export const createChallenge = (email: string) => {
  const code = randomInt(0, 1_000_000).toString().padStart(6, "0");
  const challengeToken = createToken(
    { typ: "challenge", email, codeHash: hashCode(email, code) },
    CODE_TTL_SECONDS
  );
  return { code, challengeToken };
};

export const isChallengeSolved = (challengeToken: string, email: string, code: string) => {
  const payload = readToken(challengeToken);
  return (
    payload?.typ === "challenge" &&
    payload.email === email &&
    typeof payload.codeHash === "string" &&
    safeEqual(payload.codeHash, hashCode(email, code))
  );
};

export const createVerifiedToken = (email: string) =>
  createToken({ typ: "verified", email }, VERIFIED_TTL_SECONDS);

export const isVerifiedFor = (verificationToken: string, email: string) => {
  const payload = readToken(verificationToken);
  return payload?.typ === "verified" && payload.email === email;
};
