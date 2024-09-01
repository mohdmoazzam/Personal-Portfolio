import React from "react";
import { Bounce } from "react-awesome-reveal";
import { useTheme } from "../context/ThemeContext";

const AboutMe = () => {
  const { theme } = useTheme();
  console.log("T", theme);

  return (
    <Bounce>
      <div
        className={`my-3 py-5 mx-5 md:mx-32 lg:mx-0 shadow-lg rounded-md ${
          theme === "dark"
            ? "bg-gray-800 text-gray-300"
            : "bg-white text-gray-700"
        } ${theme === "dark" ? "shadow-none" : "shadow-lg"}`}
        id="about"
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full px-2 md:w-1/2">
            <img
              src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
              alt="About_pic"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center md:text-left">
            <h1
              className={`text-3xl font-cursive border-b-2 ${
                theme === "dark" ? "border-gray-600" : "border-gray-500"
              } pb-2`}
            >
              About me
            </h1>
            <p className="mt-4 px-4 md:px-0">
              Hi, I'm Mohd Moazzam, a dedicated and passionate Full Stack
              Developer with 2 years of professional experience in developing
              robust, scalable, and user-friendly web applications. My expertise
              lies in both front-end and back-end technologies, allowing me to
              create seamless and efficient solutions from concept to
              deployment.
            </p>
          </div>
        </div>
      </div>
    </Bounce>
  );
};

export default AboutMe;
