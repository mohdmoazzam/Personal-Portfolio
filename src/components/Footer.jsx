import React from "react";
import { Slide } from "react-awesome-reveal";

const Footer = () => {
  return (
    <div className="pb-4 px-4 text-gray-600 flex justify-center items-center h-[60px] bg-gray-100 rounded-lg shadow-md sm:mt-5 sm:mb-2 sm:px-6">
      <Slide direction="up">
        <h6 className="text-center text-xs md:text-sm font-semibold text-gray-700">
          Made With ❤️ Moazzam &copy; 2024
        </h6>
      </Slide>
    </div>
  );
};

export default Footer;
