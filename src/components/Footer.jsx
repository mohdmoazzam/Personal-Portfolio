import React from "react";
import { Slide } from "react-awesome-reveal";

const Footer = () => {
  return (
    <div className="pb-6 ms-3 text-gray-600 flex justify-center items-center h-[50px] bg-gray-100 rounded-lg shadow-md sm:mt-5 sm:mb-2 sm:p-4 sm:m-0">
      <Slide direction="up">
        <h6 className="text-center text-sm font-semibold text-gray-700">
          Made With ❤️ Moazzam &copy; 2024
        </h6>
      </Slide>
    </div>
  );
};

export default Footer;
