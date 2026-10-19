import React, { FormEvent, useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiMessageCircle, FiSend } from "react-icons/fi";
import { Fade } from "react-awesome-reveal";
import axios from "axios";
import { toast } from "react-toastify";
import SectionHeading from "./SectionHeading";
import {
  EMAIL,
  GITHUB_PROFILE_URI,
  LINKEDIN_PROFILE_URI,
  PHONE,
  WHATSAPP_URI,
} from "../utils/contants";

const BASE_URL = process.env.REACT_APP_BASE_URL;

interface SendEmailResponse {
  success: boolean;
  message: string;
}

const contactLinks = [
  { icon: FiMail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: FiMessageCircle, label: "WhatsApp", value: PHONE, href: WHATSAPP_URI },
  { icon: FiLinkedin, label: "LinkedIn", value: "in/mohd-moazzam", href: LINKEDIN_PROFILE_URI },
  { icon: FiGithub, label: "GitHub", value: "@mohdmoazzam", href: GITHUB_PROFILE_URI },
];

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (!name || !email || !msg) {
        toast.error("Please provide all fields");
        setLoading(false);
        return;
      }
      const url = `${BASE_URL}/api/v1/portfolio/sendEmail`;
      const res = await axios.post<SendEmailResponse>(url, { name, email, msg });
      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      const serverMessage = axios.isAxiosError<SendEmailResponse>(error)
        ? error.response?.data?.message
        : undefined;
      toast.error(serverMessage ?? "Something went wrong, please try again later.");
    } finally {
      setLoading(false);
    }
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
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    Email
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
              <button type="submit" disabled={loading} className="btn-primary w-full sm:w-auto">
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send message <FiSend />
                  </>
                )}
              </button>
            </form>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default ContactMe;
