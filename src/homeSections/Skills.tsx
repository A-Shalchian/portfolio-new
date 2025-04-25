import {
  FaCode,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaServer,
  FaFigma,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiGithubactions,
  SiEslint,
  SiPostman,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import skillsData from "../data/skills.json";

export const Skills = () => {
  // Icon mapping object to convert string names to actual icon components
  const iconComponents = {
    // FA icons
    FaCode: <FaCode />,
    FaReact: <FaReact className="text-blue-400" />,
    FaNodeJs: <FaNodeJs className="text-green-500" />,
    FaHtml5: <FaHtml5 className="text-orange-500" />,
    FaGitAlt: <FaGitAlt className="text-orange-500" />,
    FaDocker: <FaDocker className="text-blue-500" />,
    FaAws: <FaAws className="text-orange-400" />,
    FaServer: <FaServer />,
    FaFigma: <FaFigma className="text-pink-500" />,

    // SI icons
    SiJavascript: <SiJavascript className="text-yellow-400" />,
    SiTypescript: <SiTypescript className="text-blue-500" />,
    SiTailwindcss: <SiTailwindcss className="text-cyan-400" />,
    SiMongodb: <SiMongodb className="text-green-400" />,
    SiExpress: <SiExpress className="text-gray-300" />,
    SiFirebase: <SiFirebase className="text-yellow-500" />,
    SiGithubactions: <SiGithubactions className="text-purple-400" />,
    SiEslint: <SiEslint className="text-purple-500" />,
    SiPostman: <SiPostman className="text-orange-400" />,

    // TB icons
    TbBrandNextjs: <TbBrandNextjs className="text-white" />,
  };

  // Process skills data to include actual icon components
  const processedCategories = skillsData.categories.map((category) => ({
    name: category.name,
    icon: iconComponents[category.iconName as keyof typeof iconComponents],
    skills: category.skills.map((skill) => ({
      name: skill.name,
      icon: iconComponents[skill.iconName as keyof typeof iconComponents],
    })),
  }));

  return (
    <section className="w-full pt-4 px-4 flex justify-center items-center">
      <div className="bg-[#1E2934] rounded-lg shadow-2xl max-w-md w-full overflow-hidden border border-gray-700 relative">
        {/* Header */}
        <div className="relative bg-indigo-600 px-6 py-1.5">
          <h2 className="text-xl font-bold text-white flex gap-2 items-center">
            <FaCode className="text-2xl" />
            Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="p-3">
          {processedCategories.map((category, index) => (
            <div
              key={category.name}
              className={`mb-3 ${
                index !== processedCategories.length - 1
                  ? "pb-3 border-b border-gray-700/50"
                  : ""
              }`}
            >
              <h3 className="text-white font-semibold flex items-center gap-1.5 mb-2 text-sm">
                <span className="text-indigo-400 text-lg">{category.icon}</span>
                {category.name}
              </h3>

              <div className="grid grid-cols-4 gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-gray-800/40 hover:bg-gray-800/70 transition-all duration-300 rounded-md p-2 flex flex-col items-center group"
                  >
                    <div className="text-xl mb-1 group-hover:scale-125 group-hover:transform group-hover:drop-shadow-glow transition-all duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-gray-300 text-xs text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Add custom glow effect to Tailwind config via CSS
const glowStyles = document.createElement("style");
glowStyles.innerHTML = `
  .drop-shadow-glow {
    filter: drop-shadow(0 0 6px currentColor);
  }
`;
document.head.appendChild(glowStyles);
