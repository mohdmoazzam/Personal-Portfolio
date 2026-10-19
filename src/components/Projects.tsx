import React from "react";
import { Fade } from "react-awesome-reveal";
import { FiArrowUpRight, FiCheckCircle, FiCpu, FiEye } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { Project as ProjectType, projectData, techLogos } from "../utils/mock";

const domainOf = (url: string) => url.replace(/^https?:\/\//, "");

const IntuvosPreview = () => (
  <div className="flex h-full items-center justify-center bg-gradient-to-br from-teal-50 via-white to-orange-50 p-6 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800 sm:p-10">
    <div className="w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-5 shadow-xl dark:border-white/10 dark:bg-zinc-950">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
            Assessment report
          </p>
          <p className="mt-1 font-display text-sm font-bold text-zinc-900 dark:text-white sm:text-base">
            Backend Engineer · Round 1
          </p>
        </div>
        <div
          className="relative flex h-16 w-16 items-center justify-center rounded-full"
          style={{ background: "conic-gradient(#14b8a6 0% 86%, rgb(113 113 122 / 0.2) 86% 100%)" }}
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white font-display text-sm font-bold text-zinc-900 dark:bg-zinc-950 dark:text-white">
            86%
          </span>
        </div>
      </div>
      <ul className="mt-5 space-y-2.5 text-sm">
        {[
          { icon: FiCheckCircle, label: "MCQ test", value: "18 / 20" },
          { icon: FiCpu, label: "AI interview score", value: "Strong" },
          { icon: FiEye, label: "Proctoring flags", value: "0" },
        ].map((row) => (
          <li
            key={row.label}
            className="flex items-center justify-between rounded-lg bg-zinc-50 px-3 py-2 dark:bg-white/[0.04]"
          >
            <span className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
              <row.icon className="text-teal-500" /> {row.label}
            </span>
            <span className="font-semibold text-zinc-900 dark:text-white">{row.value}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-center text-[11px] text-zinc-400">Scored by OpenAI & Grok</p>
    </div>
  </div>
);

const BrowserFrame = ({ project }: { project: ProjectType }) => (
  <div className="relative">
    <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-teal-400/25 via-cyan-400/10 to-orange-300/25 blur-2xl transition-opacity duration-500 group-hover:opacity-100 lg:opacity-60" />
    <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl transition-transform duration-500 group-hover:-translate-y-1 dark:border-white/10 dark:bg-zinc-900">
      <div className="flex items-center gap-3 border-b border-zinc-200 bg-zinc-50 px-4 py-2.5 dark:border-white/10 dark:bg-zinc-900">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
        <span className="mx-auto truncate rounded-md bg-white px-3 py-1 text-[11px] text-zinc-500 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:ring-white/10">
          {domainOf(project.link)}
        </span>
        <span className="w-[42px]" />
      </div>
      <div
        className={`overflow-hidden ${
          project.image ? "aspect-[16/10]" : "sm:aspect-[16/10]"
        }`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <IntuvosPreview />
        )}
      </div>
    </div>

    <div className="absolute -bottom-6 left-6 hidden items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-xl dark:border-white/10 dark:bg-zinc-900 sm:flex">
      <span className="gradient-text font-display text-2xl font-bold">
        {project.metrics[0].value}
      </span>
      <span className="text-xs font-medium leading-tight text-zinc-600 dark:text-zinc-300">
        {project.metrics[0].label}
      </span>
    </div>
  </div>
);

const Project = () => {
  return (
    <section id="project" className="section overflow-hidden bg-zinc-50 dark:bg-white/[0.02]">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="Products I've built"
          subtitle="Production platforms I've designed and shipped — used by recruiters, hiring teams and 100,000+ people."
        />

        <div className="space-y-24 lg:space-y-32">
          {projectData.map((project, index) => {
            const reverse = index % 2 === 1;
            return (
              <article
                key={project.id}
                className="group grid items-center gap-12 lg:grid-cols-12 lg:gap-16"
              >
                <Fade
                  direction={reverse ? "right" : "left"}
                  triggerOnce
                  className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title}`}
                    className="block"
                  >
                    <BrowserFrame project={project} />
                  </a>
                </Fade>

                <Fade
                  direction={reverse ? "left" : "right"}
                  triggerOnce
                  className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="text-outline font-display text-5xl font-bold leading-none">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="badge">{project.category}</span>
                    </div>

                    <h3 className="mt-5 font-display text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 font-medium text-teal-600 dark:text-teal-300">
                      {project.tagline}
                    </p>
                    <p className="mt-4 leading-relaxed">{project.description}</p>

                    <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200 dark:border-white/10 dark:bg-white/10">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="bg-white p-4 dark:bg-zinc-950">
                          <dt className="sr-only">{metric.label}</dt>
                          <dd className="font-display text-2xl font-bold text-zinc-900 dark:text-white">
                            {metric.value}
                          </dd>
                          <dd className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                            {metric.label}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white py-1 pl-1 pr-3 text-xs font-medium text-zinc-700 transition-colors hover:border-teal-500/40 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-300"
                        >
                          {techLogos[tag] && (
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white p-1 ring-1 ring-zinc-200 dark:ring-white/10">
                              <img
                                src={techLogos[tag]}
                                alt=""
                                className="h-full w-full object-contain"
                              />
                            </span>
                          )}
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary mt-8"
                    >
                      Visit {domainOf(project.link)} <FiArrowUpRight />
                    </a>
                  </div>
                </Fade>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
