import React, { FormEvent, useEffect, useState } from "react";
import {
  FiCheckCircle,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMessageCircle,
  FiSend,
  FiShield,
} from "react-icons/fi";
import { Fade } from "react-awesome-reveal";
import axios from "axios";
import { toast } from "react-toastify";
import SectionHeading from "./SectionHeading";
import OtpModal from "./OtpModal";
import {
  EMAIL,
  GITHUB_PROFILE_URI,
  LINKEDIN_PROFILE_URI,
  PHONE,
  WHATSAPP_URI,
} from "../utils/contants";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_URL = `${BASE_URL}/api/v1/portfolio`;
const RESEND_COOLDOWN_SECONDS = 60;

interface ApiResponse {
  success: boolean;
  message: string;
}

interface SendCodeResponse extends ApiResponse {
  challengeToken: string;
  expiresIn: number;
}

interface VerifyCodeResponse extends ApiResponse {
  verificationToken: string;
  expiresIn: number;
}

interface EmailToken {
  email: string;
  token: string;
  expiresAt: number;
}

const contactLinks = [
  { icon: FiMail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: FiMessageCircle, label: "WhatsApp", value: PHONE, href: WHATSAPP_URI },
  { icon: FiLinkedin, label: "LinkedIn", value: "in/mohd-moazzam", href: LINKEDIN_PROFILE_URI },
  { icon: FiGithub, label: "GitHub", value: "@mohdmoazzam", href: GITHUB_PROFILE_URI },
];

const normalizeEmail = (value: string) => value.trim().toLowerCase();

const isValidFor = (entry: EmailToken | null, email: string): entry is EmailToken =>
  entry !== null && entry.email === normalizeEmail(email) && entry.expiresAt > Date.now();

const getErrorMessage = (error: unknown) =>
  (axios.isAxiosError<ApiResponse>(error) ? error.response?.data?.message : undefined) ??
  "Something went wrong, please try again later.";

const Spinner = () => (
  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
);

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const [otpOpen, setOtpOpen] = useState(false);
  const [otpBusy, setOtpBusy] = useState(false);
  const [challenge, setChallenge] = useState<EmailToken | null>(null);
  const [resendIn, setResendIn] = useState(0);
  const [verified, setVerified] = useState<EmailToken | null>(null);

  const isEmailVerified = isValidFor(verified, email);

  // Wake the backend on page load: free hosts sleep when idle and take a while to start.
  useEffect(() => {
    axios.get(`${BASE_URL}/health`).catch(() => {});
  }, []);

  useEffect(() => {
    if (resendIn <= 0) return;
    const timer = setTimeout(() => setResendIn((seconds) => seconds - 1), 1000);
    return () => clearTimeout(timer);
  }, [resendIn]);

  const sendMessage = async (verificationToken: string) => {
    const res = await axios.post<ApiResponse>(`${API_URL}/sendEmail`, {
      name,
      email,
      msg,
      verificationToken,
    });
    toast.success(res.data.message);
    setName("");
    setMsg("");
  };

  const requestCode = async () => {
    const res = await axios.post<SendCodeResponse>(`${API_URL}/verification/send`, { email });
    setChallenge({
      email: normalizeEmail(email),
      token: res.data.challengeToken,
      expiresAt: Date.now() + res.data.expiresIn * 1000,
    });
    setOtpOpen(true);
    setResendIn(RESEND_COOLDOWN_SECONDS);
    toast.info(res.data.message);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !msg.trim()) {
      toast.error("Please provide all fields");
      return;
    }

    if (isValidFor(verified, email)) {
      setLoading(true);
      try {
        await sendMessage(verified.token);
      } catch (error) {
        toast.error(getErrorMessage(error));
      } finally {
        setLoading(false);
      }
      return;
    }

    // A code already sent to this address is still usable, so reopen the popup for it.
    if (isValidFor(challenge, email)) {
      setOtpOpen(true);
      return;
    }

    setLoading(true);
    try {
      await requestCode();
    } catch (error) {
      toast.error(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (code: string) => {
    if (!challenge) return false;

    setOtpBusy(true);
    let token: string;
    try {
      const res = await axios.post<VerifyCodeResponse>(`${API_URL}/verification/verify`, {
        email: challenge.email,
        code,
        challengeToken: challenge.token,
      });
      token = res.data.verificationToken;
      setVerified({
        email: challenge.email,
        token,
        expiresAt: Date.now() + res.data.expiresIn * 1000,
      });
      setChallenge(null);
      setOtpOpen(false);
    } catch (error) {
      toast.error(getErrorMessage(error));
      setOtpBusy(false);
      return false;
    }

    // The email is verified now, so if sending fails the form can retry without a new code.
    setLoading(true);
    try {
      await sendMessage(token);
    } catch (error) {
      toast.error(getErrorMessage(error));
    } finally {
      setLoading(false);
      setOtpBusy(false);
    }
    return true;
  };

  const handleResend = async () => {
    setOtpBusy(true);
    try {
      await requestCode();
    } catch (error) {
      toast.error(getErrorMessage(error));
    } finally {
      setOtpBusy(false);
    }
  };

  const handleChangeEmail = () => {
    setOtpOpen(false);
    setChallenge(null);
    document.getElementById("email")?.focus();
  };

  return (
    <section id="contact" className="section bg-zinc-50 dark:bg-white/[0.02]">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          subtitle="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <Fade direction="up" triggerOnce>
          <div className="grid gap-6 lg:grid-cols-5">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-600 via-cyan-700 to-zinc-900 p-8 text-white shadow-xl lg:col-span-2">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-orange-300/30 blur-3xl" />
              <h3 className="relative font-display text-2xl font-bold">Get in touch</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-white/80">
                I'm currently open to full-time roles and freelance projects.
                Drop a message and I'll get back to you as soon as possible.
              </p>
              <ul className="relative mt-8 space-y-3">
                {contactLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-xl bg-white/10 p-4 backdrop-blur transition-colors hover:bg-white/20"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 text-lg">
                        <link.icon />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-wider text-white/60">
                          {link.label}
                        </span>
                        <span className="block truncate text-sm font-semibold">{link.value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="card space-y-5 p-6 sm:p-8 lg:col-span-3">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 flex items-center justify-between text-sm font-medium text-zinc-800 dark:text-zinc-200"
                  >
                    Email
                    {isEmailVerified && (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        <FiCheckCircle /> Verified
                      </span>
                    )}
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="msg" className="mb-2 block text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  Message
                </label>
                <textarea
                  id="msg"
                  name="msg"
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="input resize-none"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button type="submit" disabled={loading} className="btn-primary w-full sm:w-auto">
                  {loading ? (
                    <>
                      <Spinner /> {isEmailVerified ? "Sending..." : "Sending code..."}
                    </>
                  ) : (
                    <>
                      Send message <FiSend />
                    </>
                  )}
                </button>
                {!isEmailVerified && (
                  <p className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
                    <FiShield className="shrink-0" /> We'll email you a code to verify your address.
                  </p>
                )}
              </div>
            </form>
          </div>
        </Fade>
      </div>

      {otpOpen && challenge && (
        <OtpModal
          key={challenge.token}
          email={challenge.email}
          busy={otpBusy}
          resendIn={resendIn}
          onVerify={handleVerify}
          onResend={handleResend}
          onChangeEmail={handleChangeEmail}
          onClose={() => setOtpOpen(false)}
        />
      )}
    </section>
  );
};

export default ContactMe;
