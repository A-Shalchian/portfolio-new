import { FaCode, FaGithub } from "react-icons/fa";
import { BiRocket } from "react-icons/bi";
import { IoConstructOutline } from "react-icons/io5";
import blogapp from "../assets/images/blogimg.png";

export const Project = () => {
  return (
    <section className="w-full pt-4 px-4 flex justify-center items-center">
      <div className="bg-[#1E2934] rounded-lg shadow-2xl max-w-md w-full overflow-hidden border border-gray-700 relative">
        {/* Header */}
        <div className="relative bg-indigo-600 px-6 py-1.5">
          <h2 className="text-xl font-bold text-white flex gap-2 items-center">
            <BiRocket className="text-2xl" />
            Current Project
          </h2>
        </div>

        {/* Project Card */}
        <div className="p-4">
          {/* Project Status Banner */}
          <div className="flex justify-between items-center">
            <div className="bg-yellow-500/20 text-yellow-300 text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 w-fit mb-3">
              <IoConstructOutline className="text-base" />
              In Development
            </div>
            <div>
              <a
                href="https://github.com/ArashShalchian/blog-app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white py-1.5 px-3 rounded-lg transition-colors text-sm font-semibold flex-1 justify-center"
              >
                <FaGithub />
                GitHub Repo
              </a>
            </div>
          </div>

          {/* Project Title & Image */}
          <div className="mb-3">
            <h3 className="text-white font-bold text-lg mb-4">
              Complex Blog App
            </h3>
            <div className="bg-gray-800/50 rounded-lg overflow-hidden h-48 relative">
              <img
                src={blogapp}
                alt="Blog App"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Project Description */}
          <div className="mb-4">
            <p className="text-gray-300 text-sm">
              A feature-rich blogging platform with user authentication, content
              management, and social interactions. Users can create, edit, and
              publish articles with rich text formatting, engage through
              comments, and follow their favorite writers.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-4">
            <h4 className="text-white text-sm font-semibold mb-2 flex items-center gap-1.5">
              <FaCode className="text-indigo-400" />
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="bg-gray-800/60 text-gray-300 text-xs px-2.5 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Project Links */}
          <div className="flex gap-3"></div>
        </div>
      </div>
    </section>
  );
};
