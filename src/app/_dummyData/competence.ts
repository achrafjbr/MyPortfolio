import Image from "next/image";
import { ICompetence } from "../_types/skills";

export const frondEndCompetence: ICompetence[] = [
  {
    tech: "React",
    level: "avancé",
    image: "/reactjs.png",
  },
  {
    tech: "TypeScript",
    level: "intermediate",
    image: "/typescript.png",
  },
  {
    tech: "Nextjs",
    level: "intermediate",
    image: "/nextjs.png",
  },
  {
    tech: "TailwaindCss",
    level: "intermediate",
    image: "/tailwind.png",
  },
  {
    tech: "HTML/CSS",
    level: "avancé",
    image: "/htmlcss.png",
  },
];

export const BackendCompetence: ICompetence[] = [
  {
    tech: "Node.js",
    level: "avancé",
    image: "/nodejs.png",
  },
  {
    tech: "Express.js",
    level: "avancé",
    image: "/expressjs.png",
  },
  {
    tech: "PostgreSQL",
    level: "Débutant",
    image: "/postegre.png",
  },
  {
    tech: "MongoDB",
    level: "intermediate",
    image: "/firebase.png",
  },
  {
    tech: "REST API",
    level: "avancé",
    image: "/api.png",
  },
  {
    tech: "GraphQL",
    level: "débutant",
    image: "/graphql.png",
  },
];

export const toolsCompetence: ICompetence[] = [
  {
    tech: "Git",
    level: "avancé",
    image: "/git.png",
  },
  {
    tech: "Docker",
    level: "débutant",
    image: "/docker.png",
  },
  {
    tech: "VS Code",
    level: "avancé",
    image: "/api.png",
  },
  {
    tech: "Figma",
    level: "intermediate",
    image: "/figma.png",
  },
  {
    tech: "Postman",
    level: "avancé",
    image: "/postman.png",
  },
  {
    tech: "Linux",
    level: "débutant",
    image: "/linux.png",
  },
];
