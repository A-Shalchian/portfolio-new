import { FaGithub, FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { projectsData } from "../data/projects";
import { getTechIcon } from "../data/techIcons";

export const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-900 px-4 py-12 mt-4">
      <div className="grid gap-6 max-w-md mx-auto">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-[#1E2934] rounded-lg shadow-lg overflow-hidden border border-gray-700"
          >
            {/* Project Image */}
            <div className="h-48 overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />

              {/* Development Badge */}
              {project.inDevelopment && (
                <div className="absolute top-2 right-2 bg-yellow-500/80 text-black text-xs font-medium px-2.5 py-1 rounded-full">
                  In Development
                </div>
              )}
            </div>

            {/* Project Content */}
            <div className="p-4">
              <h2 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-4">
                <h3 className=" text-sm font-semibold text-gray-300 flex items-center gap-1.5 mb-2">
                  <FaCode className="text-indigo-400" />
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-1.5 ">
                  {project.techStack.map((tech) => {
                    const techIconData = getTechIcon(tech);
                    const IconComponent = techIconData?.icon;

                    return (
                      <span
                        key={tech}
                        className="bg-indigo-900 text-gray-300 text-xs px-2.5 py-1 rounded-full flex items-center gap-1"
                      >
                        {IconComponent && (
                          <IconComponent
                            className={techIconData?.color || "text-gray-300"}
                          />
                        )}
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3 ">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-3 rounded-lg transition-colors text-sm font-medium flex-1 justify-center"
                >
                  <FaGithub />
                  GitHub
                </a>

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-2 px-3 rounded-lg transition-colors text-sm font-medium flex-1 justify-center"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
