import React from "react";
import { Fade } from "react-awesome-reveal";
import { FiArrowUpRight, FiCheckCircle, FiCpu, FiEye } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { Project as ProjectType, projectData, techLogos } from "../utils/mock";

const domainOf = (url: string) => url.replace(/^https?:\/\//, "");

const IntuvosPreview = () => (
  <div className="flex h-full items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-orange-50 p-6 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800 sm:p-10">
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
          style={{ background: "conic-gradient(#6366f1 0% 86%, rgb(113 113 122 / 0.2) 86% 100%)" }}
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
              <row.icon className="text-indigo-500" /> {row.label}
            </span>
            <span className="font-semibold text-zinc-900 dark:text-white">{row.value}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-center text-[11px] text-zinc-400">Scored by OpenAI & Grok</p>
    </div>
  </div>
);

const BuzzChatPreview = () => (
  <div className="flex h-full items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-orange-50 p-6 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800 sm:p-10">
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl dark:border-white/10 dark:bg-zinc-950">
      <div className="flex items-center gap-3 border-b border-zinc-200 px-4 py-3 dark:border-white/10">
        <div className="relative">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500 font-display text-sm font-bold text-white">
            DT
          </span>
          <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-white dark:ring-zinc-950" />
        </div>
        <div>
          <p className="font-display text-sm font-bold text-zinc-900 dark:text-white">Dev Team</p>
          <p className="text-[11px] text-zinc-400">4 members · 3 online</p>
        </div>
      </div>
      <div className="space-y-2.5 px-4 py-4 text-sm">
        <p className="w-fit max-w-[80%] rounded-2xl rounded-tl-sm bg-zinc-100 px-3 py-2 text-zinc-700 dark:bg-white/[0.06] dark:text-zinc-200">
          Pushed the new socket events 🚀
        </p>
        <p className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-tr-sm bg-indigo-500 px-3 py-2 text-white">
          Nice, presence works now!
        </p>
        <p className="w-fit max-w-[80%] rounded-2xl rounded-tl-sm bg-zinc-100 px-3 py-2 text-zinc-700 dark:bg-white/[0.06] dark:text-zinc-200">
          Sharing the design file 📎
        </p>
        <p className="text-[11px] italic text-zinc-400">Aisha is typing…</p>
      </div>
    </div>
  </div>
);

const previews: Record<string, () => JSX.Element> = {
  Intuvos: IntuvosPreview,
  BuzzChat: BuzzChatPreview,
};

const Thumbnail = ({ project }: { project: ProjectType }) => {
  const Preview = previews[project.title];
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-zinc-900">
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
      ) : (
        Preview && (
          <div className="relative aspect-[16/10] overflow-hidden">
            <div className="absolute left-0 top-0 h-[166.667%] w-[166.667%] origin-top-left scale-[0.6]">
              <Preview />
            </div>
          </div>
        )
      )}
    </div>
  );
};

const Project = () => {
  return (
    <section id="project" className="section bg-zinc-50 dark:bg-white/[0.02]">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="Products I've built"
          subtitle="Production platforms I've designed and shipped — used by recruiters, hiring teams and 100,000+ people."
        />

        <ul className="mx-auto max-w-5xl border-t border-zinc-200 dark:border-white/10">
          <Fade direction="up" triggerOnce cascade damping={0.06}>
            {projectData.map((project) => (
              <li
                key={project.id}
                className="group grid gap-6 border-b border-zinc-200 py-10 dark:border-white/10 md:grid-cols-[2fr_3fr] md:gap-10"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title}`}
                  className="block self-start"
                >
                  <Thumbnail project={project} />
                </a>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-2xl font-semibold text-zinc-900 transition-colors duration-300 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-300">
                      {project.title}
                    </h3>
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                      {project.category}
                    </span>
                  </div>
                  <p className="mt-1 font-medium text-zinc-700 dark:text-zinc-200">
                    {project.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {project.description}
                  </p>

                  <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="flex items-baseline gap-1.5">
                        <dt className="sr-only">{metric.label}</dt>
                        <dd className="font-semibold text-zinc-900 dark:text-white">
                          {metric.value}
                        </dd>
                        <dd className="text-zinc-500 dark:text-zinc-400">{metric.label}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-md bg-zinc-200/60 py-0.5 pl-0.5 pr-2 text-xs font-medium text-zinc-600 dark:bg-white/[0.06] dark:text-zinc-300"
                      >
                        {techLogos[tag] && (
                          <span className="flex h-5 w-5 items-center justify-center rounded bg-white p-0.5">
                            <img src={techLogos[tag]} alt="" className="h-full w-full object-contain" />
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
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:underline dark:text-indigo-300"
                  >
                    {domainOf(project.link)} <FiArrowUpRight />
                  </a>
                </div>
              </li>
            ))}
          </Fade>
        </ul>
      </div>
    </section>
  );
};

export default Project;
