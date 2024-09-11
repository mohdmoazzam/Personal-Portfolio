import { projectData } from "../utils/mock";

const Project = () => {
  return (
    <div className="my-8 px-4 md:pl-0 md:my-12" id="project">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#138781] uppercase mt-3 mb-1">
        Projects
      </h2>
      <hr className="mx-auto w-[80%] md:w-[280px] border-[#138781] my-2" />
      <p className="pb-3 text-center mb-5">
        👉 Here are some of my recent projects
      </p>

      <div className="flex flex-wrap justify-center gap-6" id="ads">
        {projectData.map((project) => (
          <div
            className="w-full sm:w-[90%] md:w-[45%] lg:w-1/3 max-w-sm bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-500"
            key={project.id}
          >
            <div className="relative">
              <img
                className="h-[150px] w-full object-cover rounded-t-lg"
                src={project.image}
                alt={project.title}
              />
              <span className="absolute top-[-15px] left-[10px] bg-[#f29f67] text-black text-center py-1 px-3 rounded-full text-sm">
                {project.description}
              </span>
            </div>
            <div className="text-center p-4">
              <div className="flex justify-center flex-wrap gap-2 mt-3">
                {project.tags.map((tag, index) => (
                  <span
                    className="bg-[#e0b50f] text-black py-1 px-3 rounded-full text-sm"
                    key={index}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mt-3 text-md md:text-lg font-semibold text-gray-700 uppercase mb-3">
                {project.title}
              </h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-[#138781] text-white py-1.5 px-4 rounded-full text-sm hover:bg-transparent hover:text-[#138781] hover:border-[#138781] hover:border transition-all duration-300 mx-auto"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
