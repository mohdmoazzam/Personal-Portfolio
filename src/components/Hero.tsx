import React from "react";
import Typewriter from "typewriter-effect";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";
import { FiArrowUpRight, FiChevronDown, FiDownload } from "react-icons/fi";
import Resume from "../assets/docs/Mohd_Moazzam_Resume.pdf";
import { WHATSAPP_URI } from "../utils/contants";

const CodeCard = () => (
  <div className="relative mx-auto w-full max-w-md">
    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-400 via-violet-400 to-orange-300 bg-[length:200%_200%] opacity-60 blur-xl motion-safe:animate-gradient" />
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/95 shadow-2xl">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
        <span className="ml-3 text-xs text-zinc-500">developer.ts</span>
      </div>
      <pre className="overflow-x-auto p-5 text-left font-mono text-[13px] leading-relaxed text-zinc-300 sm:text-sm">
        <code>
          <span className="text-purple-400">const</span>{" "}
          <span className="text-violet-300">developer</span> = {"{"}
          {"\n  "}name: <span className="text-orange-300">"Mohd Moazzam"</span>,
          {"\n  "}role: <span className="text-orange-300">"Full Stack Developer"</span>,
          {"\n  "}company: <span className="text-orange-300">"Appsierra"</span>,
          {"\n  "}stack: [<span className="text-orange-300">"Node.js"</span>,{" "}
          <span className="text-orange-300">"NestJS"</span>,{" "}
          <span className="text-orange-300">"React"</span>,
          {"\n          "}<span className="text-orange-300">"PostgreSQL"</span>,{" "}
          <span className="text-orange-300">"Redis"</span>],
          {"\n  "}experience: <span className="text-orange-300">"4+ years"</span>,
          {"\n  "}available: <span className="text-indigo-300">true</span>,
          {"\n"}
          {"}"};
        </code>
      </pre>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28"
    >
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -left-32 top-16 h-96 w-96 rounded-full bg-indigo-400/30 blur-3xl motion-safe:animate-blob dark:bg-indigo-500/20" />
      <div className="pointer-events-none absolute -right-24 top-48 h-80 w-80 rounded-full bg-orange-300/30 blur-3xl [animation-delay:4s] motion-safe:animate-blob dark:bg-orange-500/10" />

      <div className="container-page relative grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
        <div className="text-center lg:text-left">
          <Fade direction="up" triggerOnce cascade damping={0.12}>
            <span className="badge normal-case tracking-normal">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for new opportunities
            </span>

            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl">
              Hi, I'm <span className="gradient-text">Mohd Moazzam</span>
            </h1>

            <div className="mt-4 h-9 font-display text-xl font-medium text-zinc-600 dark:text-zinc-300 sm:text-2xl">
              <Typewriter
                options={{
                  strings: [
                    "Full-Stack Developer",
                    "Node.js & NestJS Engineer",
                    "React.js Developer",
                    "API & Database Specialist",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-lg lg:mx-0">
              I build production web apps with Node.js, NestJS and React — from
              a recruiting SaaS product to a social platform with 100,000+
              active users.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href={WHATSAPP_URI}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Hire Me <FiArrowUpRight className="text-base" />
              </a>
              <a
                href={Resume}
                download="Mohd_Moazzam_Resume.pdf"
                className="btn-secondary"
              >
                <FiDownload className="text-base" /> Download CV
              </a>
            </div>
          </Fade>
        </div>

        <Fade direction="up" triggerOnce delay={200}>
          <CodeCard />
        </Fade>
      </div>

      <Link
        to="about"
        smooth
        offset={-64}
        duration={500}
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 cursor-pointer text-2xl text-zinc-400 transition-colors hover:text-indigo-500 sm:block"
      >
        <FiChevronDown className="motion-safe:animate-bounce" />
      </Link>
    </section>
  );
};

export default Hero;
