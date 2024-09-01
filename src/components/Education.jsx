import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool } from "react-icons/md";
import { GiDiploma } from "react-icons/gi";

const Education = () => {
  return (
    <>
      <div
        className="education py-24 my-12 sm:my-8 sm:py-0 sm:mt-8 px-0 sm:px-0 sm:pl-0"
        id="education"
      >
        <div>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase font-bold text-green-700 sm:pt-5">
            education
          </h2>
          <hr className="border-t-2 border-green-700 w-96 mx-auto my-2 sm:w-72 sm:mb-2" />

          <VerticalTimeline lineColor="#138781">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgba(128, 128, 128, 0.1)",
                color: "black",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgba(128, 128, 128, 0.1)",
              }}
              date="2019 - 2022"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title text-green-700">
                B.Tech (CSE)
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-gray-800">
                UTU Dehradun, IN
              </h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgba(128, 128, 128, 0.1)",
                color: "black",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgba(128, 128, 128, 0.1)",
              }}
              date="2015 - 2018"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<GiDiploma />}
            >
              <h3 className="vertical-timeline-element-title text-green-700">
                Polytechnic (CSE)
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-gray-800">
                UBTER Roorkee, IN
              </h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Education;
