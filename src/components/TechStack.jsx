import React from "react";
import { Fade } from "react-awesome-reveal";
import { Techstacks } from "../utils/mock";

const Techstack = () => {
  return (
    <div className="px-4 mt-14 md:px-0 md:mt-12" id="tech-stack">
      <h2 className="text-center text-2xl font-bold text-green-600 uppercase mt-3 mb-1">
        Technologies Stack
      </h2>
      <hr className="border-green-600 w-96 mx-auto my-2 md:w-72" />
      <p className="text-center pb-3">
        👉 including programming languages, frameworks, databases, front-end and
        back-end tools and APIs
      </p>
      <div className="flex flex-wrap justify-center">
        {Techstacks.map((ts) => (
          <div key={ts._id} className="w-full md:w-1/4 p-2">
            <Fade direction="left">
              <div className="m-2 cursor-pointer shadow-md hover:shadow-lg hover:bg-green-600 hover:text-white transition-all duration-1000">
                <div className="p-4">
                  <div className="flex justify-center items-center">
                    <div className="mr-2">
                      <ts.icon className="text-2xl" />
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold">{ts.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techstack;
