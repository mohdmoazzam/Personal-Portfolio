import React from "react";
import { Fade } from "react-awesome-reveal";
import { FiAward, FiBookOpen, FiCheck, FiMapPin } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { certificationData, educationData } from "../utils/mock";

const Education = () => {
  return (
    <section id="education" className="section overflow-hidden">
      <div className="container-page">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          subtitle="The foundation behind the code — formal computer science training and focused certifications."
        />

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-indigo-500/0 via-indigo-500/50 to-orange-400/0 md:left-1/2">
            <span className="absolute left-1/2 h-24 w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-transparent via-violet-300 to-transparent motion-safe:animate-beam" />
          </div>

          <ol className="space-y-14 md:space-y-24">
            {educationData.map((edu, index) => {
              const reverse = index % 2 === 1;
              return (
                <li
                  key={edu.id}
                  className="group relative grid grid-cols-[3rem_1fr] items-center gap-x-4 md:grid-cols-[1fr_5rem_1fr] md:gap-x-0"
                >
                  <div className="relative z-10 col-start-1 row-span-2 row-start-1 flex justify-center self-start md:col-start-2 md:row-span-1 md:self-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-xl text-white shadow-lg shadow-indigo-500/40 ring-8 ring-white transition-transform duration-500 group-hover:scale-110 dark:ring-zinc-950">
                      <edu.icon />
                    </span>
                  </div>

                  <Fade
                    direction={reverse ? "left" : "right"}
                    triggerOnce
                    className={`col-start-2 row-start-1 ${
                      reverse
                        ? "md:col-start-1 md:pr-10 md:text-right"
                        : "md:col-start-3 md:pl-10"
                    }`}
                  >
                    <div>
                      <p className="text-outline font-display text-6xl font-bold leading-none tracking-tight transition-colors duration-500 md:text-8xl">
                        {edu.start}
                      </p>
                      <div
                        className={`mt-3 flex items-center gap-3 ${
                          reverse ? "md:justify-end" : ""
                        }`}
                      >
                        <span className="gradient-text font-display text-2xl font-bold">
                          → {edu.end}
                        </span>
                        <span className="rounded-full bg-orange-400/15 px-2.5 py-0.5 text-xs font-semibold text-orange-600 dark:text-orange-300">
                          {edu.end - edu.start} years
                        </span>
                      </div>
                    </div>
                  </Fade>

                  <Fade
                    direction={reverse ? "right" : "left"}
                    triggerOnce
                    className={`col-start-2 row-start-2 mt-5 md:row-start-1 md:mt-0 ${
                      reverse ? "md:col-start-3 md:pl-10" : "md:col-start-1 md:pr-10"
                    }`}
                  >
                    <article className="card relative overflow-hidden p-7 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-indigo-500/40 group-hover:shadow-xl group-hover:shadow-indigo-500/10">
                      <span className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-indigo-400/10 blur-2xl transition-colors duration-500 group-hover:bg-indigo-400/25" />
                      <span className="badge relative">{edu.level}</span>
                      <h3 className="relative mt-4 font-display text-2xl font-bold leading-snug text-zinc-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <div className="relative mt-5 flex items-center gap-3 rounded-xl bg-zinc-100/70 p-3 dark:bg-white/[0.04]">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-lg text-indigo-600 shadow-sm dark:bg-zinc-900 dark:text-indigo-300">
                          <FiBookOpen />
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                            {edu.institution}
                          </p>
                          <p className="mt-0.5 flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
                            <FiMapPin className="shrink-0" /> {edu.location}
                          </p>
                        </div>
                      </div>
                    </article>
                  </Fade>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mx-auto mt-24 max-w-5xl">
          <div className="mb-10 text-center">
            <span className="badge border-orange-400/25 bg-orange-400/10 text-orange-600 dark:text-orange-300">
              <FiAward /> Certifications
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Fade direction="up" triggerOnce cascade damping={0.12}>
              {certificationData.map((cert) => (
                <article
                  key={cert.id}
                  className="group h-full rounded-2xl border border-zinc-200 bg-white p-1.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <div className="relative h-full overflow-hidden rounded-xl border border-dashed border-orange-300/70 p-6 dark:border-orange-400/25">
                    <span className="pointer-events-none absolute -bottom-14 -right-14 h-40 w-40 rounded-full bg-orange-400/10 blur-2xl" />
                    <div className="relative flex items-center gap-5">
                      <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-rose-500 text-2xl text-white shadow-lg shadow-orange-500/30 ring-4 ring-orange-400/20 transition-transform duration-500 group-hover:rotate-12">
                        <FiAward />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-orange-600 dark:text-orange-300">
                          {cert.issuer}
                        </p>
                        <h4 className="mt-1 font-display text-xl font-bold text-zinc-900 dark:text-white">
                          {cert.title}
                        </h4>
                      </div>
                    </div>
                    <ul className="relative mt-5 space-y-2">
                      {cert.points.map((point) => (
                        <li key={point} className="flex gap-2.5 text-sm leading-relaxed">
                          <FiCheck className="mt-1 shrink-0 text-orange-400" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
