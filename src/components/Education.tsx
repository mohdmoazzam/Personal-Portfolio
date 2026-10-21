import React from "react";
import { Fade } from "react-awesome-reveal";
import { FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { certificationData, educationData } from "../utils/mock";

interface Row {
  key: string;
  aside: string;
  title: string;
  subtitle: string;
  detail: string;
  tag?: string;
  logo?: string;
  url?: string;
}

const rows: Row[] = [
  ...[...educationData].reverse().map((edu) => ({
    key: `edu-${edu.id}`,
    aside: `${edu.start} — ${edu.end}`,
    title: edu.degree,
    subtitle: edu.institution,
    detail: edu.location,
    tag: edu.level,
    logo: edu.logo,
    url: edu.url,
  })),
  ...certificationData.map((cert) => ({
    key: `cert-${cert.id}`,
    aside: "Certificate",
    title: cert.title,
    subtitle: cert.issuer,
    detail: cert.points.join(" "),
    logo: cert.logo,
    url: cert.url,
  })),
];

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          subtitle="The foundation behind the code — formal computer science training and focused certifications."
        />

        <ul className="mx-auto max-w-4xl border-t border-zinc-200 dark:border-white/10">
          <Fade direction="up" triggerOnce cascade damping={0.08}>
            {rows.map((row) => (
              <li
                key={row.key}
                className="group grid gap-x-8 gap-y-2 border-b border-zinc-200 py-7 dark:border-white/10 sm:grid-cols-[9rem_1fr]"
              >
                <p className="pt-1 text-sm font-medium tabular-nums text-zinc-500 dark:text-zinc-400">
                  {row.aside}
                </p>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-xl font-semibold text-zinc-900 transition-colors duration-300 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-300">
                      {row.title}
                    </h3>
                    {row.tag && (
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                        {row.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 flex items-center gap-2 font-medium text-zinc-700 dark:text-zinc-200">
                    {row.logo && (
                      <img
                        src={row.logo}
                        alt=""
                        className="h-6 w-6 shrink-0 rounded-full bg-white ring-1 ring-zinc-200 dark:ring-white/10"
                      />
                    )}
                    {row.url ? (
                      <a
                        href={row.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-indigo-600 hover:underline dark:hover:text-indigo-300"
                      >
                        {row.subtitle} <FiArrowUpRight className="text-sm" />
                      </a>
                    ) : (
                      row.subtitle
                    )}
                  </p>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {row.detail}
                  </p>
                </div>
              </li>
            ))}
          </Fade>
        </ul>
      </div>
    </section>
  );
};

export default Education;
