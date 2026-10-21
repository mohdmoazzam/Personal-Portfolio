import React from "react";
import { Fade } from "react-awesome-reveal";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";
import { TimelineItem } from "../utils/mock";

const Timeline = ({ items }: { items: TimelineItem[] }) => {
  return (
    <ol className="relative mx-auto max-w-4xl space-y-8 before:absolute before:bottom-0 before:left-5 before:top-2 before:w-px before:bg-gradient-to-b before:from-indigo-500 before:via-zinc-300 before:to-transparent dark:before:via-white/10">
      {items.map((item) => (
        <li key={item.id} className="relative pl-14 sm:pl-16">
          {item.logo ? (
            <img
              src={item.logo}
              alt={`${item.org} logo`}
              className="absolute left-0 top-1 h-10 w-10 rounded-xl shadow-sm ring-1 ring-zinc-200 dark:ring-white/10"
            />
          ) : (
            <span className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-indigo-500/30 bg-white text-lg text-indigo-600 shadow-sm dark:bg-zinc-900 dark:text-indigo-300">
              <item.icon />
            </span>
          )}
          <Fade direction="up" triggerOnce>
            <div className="card p-6 transition-colors duration-300 hover:border-indigo-500/40">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-white">
                  {item.title}
                </h3>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-white/5 dark:text-zinc-400">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-300">
                {item.org}
              </p>
              {item.location && (
                <p className="mt-1 flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
                  <FiMapPin /> {item.location}
                </p>
              )}
              {item.description && (
                <p className="mt-3 text-sm leading-relaxed">{item.description}</p>
              )}

              {item.projects && (
                <div className="mt-5 space-y-3">
                  {item.projects.map((project) => (
                    <div
                      key={project.name}
                      className="rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-5 dark:border-white/10 dark:bg-white/[0.02]"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="font-semibold text-zinc-900 dark:text-white">
                          {project.name}
                        </h4>
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-0.5 text-xs font-semibold text-indigo-600 hover:underline dark:text-indigo-300"
                          >
                            {project.url.replace(/^https?:\/\//, "")}
                            <FiArrowUpRight />
                          </a>
                        )}
                      </div>
                      <p className="mt-1 text-xs italic text-zinc-500 dark:text-zinc-400">
                        {project.stack}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Fade>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
