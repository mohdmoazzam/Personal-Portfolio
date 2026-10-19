import React from "react";
import { Fade } from "react-awesome-reveal";
import SectionHeading from "./SectionHeading";
import { Techstacks } from "../utils/mock";

const Techstack = () => {
  return (
    <section id="tech-stack" className="section bg-zinc-50 dark:bg-white/[0.02]">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          subtitle="Backend, frontend, databases, search, cloud and AI tools I use to ship production software."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          <Fade direction="up" triggerOnce cascade damping={0.04}>
            {Techstacks.map((ts) => (
              <div
                key={ts._id}
                className="card group flex h-full flex-col items-center gap-3 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-2.5 shadow-sm ring-1 ring-zinc-200 transition-transform duration-300 group-hover:scale-110 dark:ring-white/10">
                  <img
                    src={ts.logo}
                    alt={`${ts.name} logo`}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                    {ts.name}
                  </h3>
                  <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                    {ts.category}
                  </p>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Techstack;
