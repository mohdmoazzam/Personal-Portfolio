import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../assets/docs/Mohd_Moazzam_CV.pdf";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`flex flex-col items-center justify-center h-[50vh] p-4 relative ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <div className="text-center space-y-4 max-w-3xl mx-auto mt-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl">Hi 👋 I'm </h2>
        <div className="flex items-center justify-center h-16">
          <h1 className="text-[#00CED1] text-2xl sm:text-3xl md:text-4xl">
            <Typewriter
              options={{
                strings: ["Mohd Moazzam", "a Fullstack Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
          <div className="flex-shrink-0">
            <a
              className={`bg-gradient-to-r ${
                theme === "light"
                  ? "from-blue-400 to-blue-600"
                  : "from-blue-600 to-blue-800"
              } text-white px-4 py-2 rounded-md text-center w-full sm:w-40 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:brightness-110 hover:opacity-90`}
              href="https://api.whatsapp.com/send?phone=9568571"
              rel="noreferrer"
              target="_blank"
            >
              Hire Me
            </a>
          </div>
          <div className="flex-shrink-0">
            <a
              className={`bg-gradient-to-r ${
                theme === "light"
                  ? "from-orange-400 to-orange-600"
                  : "from-orange-600 to-orange-800"
              } text-white px-4 py-2 rounded-md text-center w-full sm:w-40 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:brightness-110 hover:opacity-90`}
              href={Resume}
              download="Mozzam_resume.pdf"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
