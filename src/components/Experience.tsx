import React from "react";
import SectionHeading from "./SectionHeading";
import Timeline from "./Timeline";
import { experienceData } from "../utils/mock";

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container-page">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
        <Timeline items={experienceData} />
      </div>
    </section>
  );
};

export default Experience;
