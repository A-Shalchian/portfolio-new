import pfpic from "../assets/images/pfpic.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

export const Profile = () => {
  return (
    <section className="w-full py-12 px-4 flex justify-center items-center mt-4">
      <div className="bg-[#1E2934] rounded-lg shadow-2xl max-w-md w-full overflow-hidden border border-gray-700 relative">
        {/* Resume Button - Top Left */}
        <div className="absolute top-3 left-3 z-20">
          <a
            href="https://drive.google.com/file/d/12B62nEyRKasqH7VWBhoB76J6cg26Lu8b/view?usp=sharing"
            target="_blank"
            className="relative group"
            rel="noopener noreferrer"
          >
            <span className="absolute inset-0 rounded-full bg-indigo-500 opacity-75 group-hover:opacity-100 blur-sm group-hover:blur transition-all duration-300 animate-pulse"></span>
            <span className="relative flex items-center justify-center bg-indigo-600 text-white rounded-full p-2 z-10 transition-transform group-hover:scale-105 duration-300">
              <HiDocumentText className="text-xl" />
            </span>
            {/* Tooltip */}
            <span className="absolute left-0 -bottom-10 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Download Resume
            </span>
          </a>
        </div>

        {/* Location - Top Right */}
        <div className="absolute top-3 right-3 z-20 flex items-center gap-1 text-gray-300">
          <MdLocationOn className="text-indigo-400 text-xl" />
          <span className="text-sm">Toronto, ON</span>
        </div>

        {/* Profile Header with Image */}
        <div className="flex flex-col items-center pt-8 pb-4">
          <div className="relative w-[150px] h-[150px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden shadow-md border-4 border-gray-400 mb-4">
            <img
              src={pfpic}
              alt="Profile headshot"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-1 leading-none tracking-tight">
            Arash Shalchian
          </h1>
          <h2 className="text-lg md:text-xl text-gray-400 font-medium tracking-tight">
            Software Developer
          </h2>
        </div>

        {/* Description */}
        <div className="px-6 py-4 ">
          <p className="text-gray-600 text-center">
            Passionate about creating beautiful, responsive web applications
            with React and modern web technologies.
          </p>
        </div>

        {/* Social Links */}
        <div className="px-6 py-4 flex justify-between gap-8">
          <a
            href="https://github.com/ArashShalchian"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 duration-300"
          >
            <FaGithub className="text-indigo-500 text-2xl hover:text-gray-300 transition-colors" />
          </a>

          <a
            href="https://www.linkedin.com/in/arash-shalchian/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 duration-300"
          >
            <FaLinkedin className="text-indigo-500 text-2xl hover:text-gray-300 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};
