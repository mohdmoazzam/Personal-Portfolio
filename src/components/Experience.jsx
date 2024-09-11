import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWork } from "react-icons/md";

const Experience = () => {
  return (
    <div className="pl-4 mt-6 md:pl-36 md:mt-14" id="experience">
      <div className="py-6 md:py-8">
        <h2 className="text-center text-xl md:text-2xl font-bold text-[#1e1e2c] uppercase mb-2">
          Experience
        </h2>
        <hr className="border-t-2 border-[#138781] w-[90%] md:w-[400px] mx-auto my-2" />
        <VerticalTimeline lineColor="#1e1e2c">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #1e1e2c" }}
            date="2022 - Present"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<MdOutlineWork />}
          >
            <h3 className="text-[#138781] text-lg md:text-xl font-semibold">
              Associate Developer
            </h3>
            <h4 className="text-[#1e1e2c] text-md md:text-lg">Appsierra, IN</h4>
            <p>Working as a Backend Developer</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
