import React from "react";
import { Fade } from "react-awesome-reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ eyebrow, title, subtitle }: SectionHeadingProps) => {
  return (
    <Fade direction="up" triggerOnce>
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <span className="badge">{eyebrow}</span>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-base text-zinc-500 dark:text-zinc-400">
            {subtitle}
          </p>
        )}
      </div>
    </Fade>
  );
};

export default SectionHeading;
