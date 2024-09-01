import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWork } from "react-icons/md";

const Experience = () => {
  return (
    <div className="pl-36 mt-14 md:pl-0 md:mt-12" id="experience">
      <div className="py-8">
        <h2 className="text-center text-2xl font-bold text-[#1e1e2c] uppercase mb-1">
          Experience
        </h2>
        <hr className="border-t-2 border-[#138781] w-[400px] mx-auto my-2 md:w-[280px]" />
        <VerticalTimeline lineColor="#1e1e2c">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #1e1e2c" }}
            date="2022 - Present"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<MdOutlineWork />}
          >
            <h3 className="text-[#138781] text-xl font-semibold">
              Associate Developer
            </h3>
            <h4 className="text-[#1e1e2c] text-lg">Appsierra, IN</h4>
            <p>Working as a Backend Developer</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
