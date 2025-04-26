export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubLink: string;
  liveLink?: string;
  inDevelopment?: boolean;
}

import blogapp from "../assets/images/blogimg.png";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Complex Blog App",
    description:
      "A feature-rich blogging platform with user authentication, content management, and social interactions. Users can create, edit, and publish articles with rich text formatting.",
    image: blogapp,
    techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    githubLink: "https://github.com/A-Shalchian/blog-app",
    inDevelopment: true,
  },
];
