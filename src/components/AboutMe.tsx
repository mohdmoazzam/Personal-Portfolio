import React from "react";
import { Fade } from "react-awesome-reveal";
import SectionHeading from "./SectionHeading";
import profileImage from "../assets/images/profile.webp";

const AboutMe = () => {
  return (
    <section id="about" className="section">
      <div className="container-page">
        <SectionHeading eyebrow="About me" title="Shipping features end to end" />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Fade direction="left" triggerOnce>
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-3 rotate-3 rounded-3xl bg-gradient-to-tr from-teal-400/40 to-orange-300/40 blur-sm" />
              <img
                src={profileImage}
                alt="Mohd Moazzam"
                className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-xl"
              />
            </div>
          </Fade>

          <Fade direction="right" triggerOnce>
            <div>
              <p className="text-lg leading-relaxed">
                Hi, I'm <span className="font-semibold text-zinc-900 dark:text-white">Mohd Moazzam</span>,
                a full-stack developer with 4 years of experience building
                production web applications with Node.js, NestJS and React.js —
                including a recruiting SaaS product and a social platform with
                100,000+ active users.
              </p>
              <p className="mt-4 text-lg leading-relaxed">
                I ship features end to end, from PostgreSQL and MongoDB schemas
                and RBAC-secured REST APIs to real-time WebSocket experiences
                and LLM-powered assessment tooling.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
