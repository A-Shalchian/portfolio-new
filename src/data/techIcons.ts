import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaVuejs,
  FaAngular,
  FaAws,
  FaDocker,
  FaDatabase,
  FaGithub,
  FaPython,
  FaJava,
  FaPhp,
  FaSass,
  FaBootstrap,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiGraphql,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiElectron,
  SiGatsby,
  SiNestjs,
  SiStyledcomponents,
  SiMui,
  SiChakraui,
  SiDjango,
  SiVite,
} from "react-icons/si";

import { TbBrandThreejs } from "react-icons/tb";
import { IconType } from "react-icons";

export interface TechIcon {
  name: string;
  icon: IconType;
  color: string;
}

// Map of technology names to their corresponding icon components and colors
export const techIcons: Record<string, TechIcon> = {
  React: {
    name: "React",
    icon: FaReact,
    color: "text-blue-400",
  },
  "Node.js": {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-500",
  },
  MongoDB: {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-500",
  },
  Express: {
    name: "Express",
    icon: SiExpress,
    color: "text-gray-400",
  },
  TypeScript: {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-500",
  },
  JavaScript: {
    name: "JavaScript",
    icon: FaJs,
    color: "text-yellow-400",
  },
  HTML5: {
    name: "HTML5",
    icon: FaHtml5,
    color: "text-orange-500",
  },
  CSS3: {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "text-blue-500",
  },
  "Tailwind CSS": {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-cyan-400",
  },
  Redux: {
    name: "Redux",
    icon: SiRedux,
    color: "text-purple-500",
  },
  "Next.js": {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-white",
  },
  Firebase: {
    name: "Firebase",
    icon: SiFirebase,
    color: "text-yellow-500",
  },
  GraphQL: {
    name: "GraphQL",
    icon: SiGraphql,
    color: "text-pink-600",
  },
  "Styled Components": {
    name: "Styled Components",
    icon: SiStyledcomponents,
    color: "text-pink-500",
  },
  "Material UI": {
    name: "Material UI",
    icon: SiMui,
    color: "text-blue-500",
  },
  "Chakra UI": {
    name: "Chakra UI",
    icon: SiChakraui,
    color: "text-teal-500",
  },
  "Three.js": {
    name: "Three.js",
    icon: TbBrandThreejs,
    color: "text-white",
  },
  "Vue.js": {
    name: "Vue.js",
    icon: FaVuejs,
    color: "text-green-500",
  },
  Angular: {
    name: "Angular",
    icon: FaAngular,
    color: "text-red-500",
  },
  AWS: {
    name: "AWS",
    icon: FaAws,
    color: "text-orange-400",
  },
  Docker: {
    name: "Docker",
    icon: FaDocker,
    color: "text-blue-500",
  },
  MySQL: {
    name: "MySQL",
    icon: SiMysql,
    color: "text-blue-600",
  },
  PostgreSQL: {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "text-blue-400",
  },
  Python: {
    name: "Python",
    icon: FaPython,
    color: "text-yellow-300",
  },
  Java: {
    name: "Java",
    icon: FaJava,
    color: "text-red-500",
  },
  PHP: {
    name: "PHP",
    icon: FaPhp,
    color: "text-indigo-400",
  },
  Sass: {
    name: "Sass",
    icon: FaSass,
    color: "text-pink-500",
  },
  Bootstrap: {
    name: "Bootstrap",
    icon: FaBootstrap,
    color: "text-purple-500",
  },
  Figma: {
    name: "Figma",
    icon: FaFigma,
    color: "text-purple-400",
  },
  Git: {
    name: "Git",
    icon: FaGitAlt,
    color: "text-orange-500",
  },
  Gatsby: {
    name: "Gatsby",
    icon: SiGatsby,
    color: "text-purple-600",
  },
  Electron: {
    name: "Electron",
    icon: SiElectron,
    color: "text-blue-300",
  },
  NestJS: {
    name: "NestJS",
    icon: SiNestjs,
    color: "text-red-500",
  },
  Django: {
    name: "Django",
    icon: SiDjango,
    color: "text-green-600",
  },
  SQLite: {
    name: "SQLite",
    icon: FaDatabase,
    color: "text-blue-400",
  },
  GitHub: {
    name: "GitHub",
    icon: FaGithub,
    color: "text-white",
  },
  Vite: {
    name: "Vite",
    icon: SiVite,
    color: "text-purple-500",
  },
};

// Helper function to get icon info by technology name (case insensitive)
export const getTechIcon = (techName: string): TechIcon | undefined => {
  // Try to find exact match first
  if (techIcons[techName]) {
    return techIcons[techName];
  }

  // Try case-insensitive search
  const lowerCaseTechName = techName.toLowerCase();
  const foundKey = Object.keys(techIcons).find(
    (key) => key.toLowerCase() === lowerCaseTechName
  );

  return foundKey ? techIcons[foundKey] : undefined;
};
