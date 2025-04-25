import { HiAcademicCap } from "react-icons/hi";
import { IoSchool } from "react-icons/io5";

export const Education = () => {
  return (
    <section className="w-full pt-4 px-4 flex justify-center items-center">
      <div className="bg-[#1E2934] rounded-lg shadow-2xl max-w-md w-full overflow-hidden border border-gray-700 relative">
        {/* Header */}
        <div className="relative bg-indigo-600 px-6 py-2">
          <h2 className="text-2xl font-bold text-white flex gap-2">
            <HiAcademicCap className="text-3xl" />
            Education
          </h2>
        </div>

        {/* College Info */}
        <div className="pt-4 px-4">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-100 p-2 rounded-full flex-shrink-0">
              <IoSchool className="text-indigo-600 text-2xl" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                George Brown College
              </h3>
              <p className="text-indigo-300 font-medium">
                B.Sc. in Computer Programming & Analysis
              </p>
            </div>
          </div>
        </div>

        {/* GPA and Graduation - Horizontal under college info */}
        <div className="px-4 pt-3 pb-2 flex justify-between">
          <div className="flex items-center gap-2  px-3 py-1.5 rounded-md">
            <span className="text-gray-400 text-xs">GPA:</span>
            <p className="text-white font-bold text-sm">3.8/4.0</p>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md">
            <span className="text-gray-400 text-xs">Graduation:</span>
            <p className="text-white font-bold text-sm">April 2026</p>
          </div>
        </div>

        {/* Experience */}
        <div className="px-4 pt-4">
          <h3 className="text-white font-semibold mb-1">Relevant Experience</h3>
          <div className="space-y-3">
            <div className="bg-gray-800/30 p-3 rounded-lg">
              <div className="flex justify-between mb-1">
                <h4 className="text-indigo-300 font-medium">MobiHelp Tutor</h4>
                <span className="text-gray-400 text-xs">2024-Present</span>
              </div>
              <p className="text-gray-300 text-sm">
                Provided on-demand academic support through the MobiHelp
                platform by assisting students with course-related queries,
                troubleshooting technical issues, and guiding them through
                coding problems.
              </p>
            </div>
            <div className="bg-gray-800/30 p-3 rounded-lg">
              <div className="flex justify-between mb-1">
                <h4 className="text-indigo-300 font-medium">
                  Lab Teaching Assistant
                </h4>
                <span className="text-gray-400 text-xs">2023-2024</span>
              </div>
              <p className="text-gray-300 text-sm">
                Supported faculty in delivering lab sessions for Programming &
                AI courses. Responsibilities included assisting students with
                hands-on coding exercises, debugging projects, and grading
                assignments with detailed feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
