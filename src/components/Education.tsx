import React from "react";
import { Fade } from "react-awesome-reveal";
import { FiAward, FiBookOpen, FiCheck, FiMapPin } from "react-icons/fi";
import { IconType } from "react-icons";
import SectionHeading from "./SectionHeading";
import { certificationData, educationData } from "../utils/mock";

const ColumnHeading = ({ icon: Icon, label }: { icon: IconType; label: string }) => (
  <h3 className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
    <Icon className="text-indigo-500" /> {label}
  </h3>
);

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          subtitle="The foundation behind the code — formal computer science training and focused certifications."
        />

        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:gap-8">
          <div>
            <ColumnHeading icon={FiBookOpen} label="Degrees" />
            <div className="space-y-4">
              <Fade direction="up" triggerOnce cascade damping={0.12}>
                {[...educationData].reverse().map((edu) => (
                  <article
                    key={edu.id}
                    className="card flex gap-4 p-5 transition-colors duration-300 hover:border-indigo-500/40"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-xl text-indigo-600 dark:text-indigo-300">
                      <edu.icon />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium tabular-nums text-zinc-500 dark:text-zinc-400">
                        {edu.start} – {edu.end} · {edu.level}
                      </p>
                      <h4 className="mt-1 font-display font-semibold leading-snug text-zinc-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-300">
                        {edu.institution}
                      </p>
                      <p className="mt-1 flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
                        <FiMapPin className="shrink-0" /> {edu.location}
                      </p>
                    </div>
                  </article>
                ))}
              </Fade>
            </div>
          </div>

          <div>
            <ColumnHeading icon={FiAward} label="Certifications" />
            <div className="space-y-4">
              <Fade direction="up" triggerOnce cascade damping={0.12}>
                {certificationData.map((cert) => (
                  <article
                    key={cert.id}
                    className="card p-5 transition-colors duration-300 hover:border-indigo-500/40"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <h4 className="font-display font-semibold text-zinc-900 dark:text-white">
                        {cert.title}
                      </h4>
                      <span className="text-xs font-medium text-indigo-600 dark:text-indigo-300">
                        {cert.issuer}
                      </span>
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {cert.points.map((point) => (
                        <li key={point} className="flex gap-2 text-sm leading-relaxed">
                          <FiCheck className="mt-1 shrink-0 text-indigo-500" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
