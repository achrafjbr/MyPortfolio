import { SkillsI } from "../_types/skills";

export const project1: SkillsI = {
  skills: ["MongoDB", "NodeJs", "TypeScript", "React", "Stripe"],
  projectName: "E-commerce Platform",
  projectDescription:
    "Une plateforme e-commerce complète avec panier, paiement et gestion des commandes",
};

export const project2: SkillsI = {
  skills: ["Next.js", "PostgreSQL", "Prisma", "TailwindCSS"],
  projectName: "Task Management App",
  projectDescription:
    "Application de gestion de tâches collaborative avec système de notifications en temps réel",
};

export const project3: SkillsI = {
  skills: ["MongoDB", "Chart.js", "OpenWeather API", "Material-UI"],
  projectName: "Weather Dashboard",
  projectDescription:
    "Dashboard météo interactif avec prévisions et visualisation de données",
};

export const project4: SkillsI = {
  skills: ["Vue.js", "Express", "MySQL", "Redis"],
  projectName: "Blog Platform",
  projectDescription:
    "Plateforme de blog avec éditeur Markdown et système de commentaires",
};

export const project5: SkillsI = {
  skills: ["React Native", "Firebase", "Redux", "Recharts"],
  projectName: "Fitness Tracker",
  projectDescription:
    "Application de suivi d'activités sportives avec graphiques de progressions",
};

export const project6: SkillsI = {
  skills: ["Angular", "NestJS", "PostgreSQL", "Docker"],
  projectName: "Social Media Analytics",
  projectDescription: "Outil d'analyse de performance sur les réseaux sociaux",
};

export const projectList: SkillsI[] = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
];

export const showProjectByPagination = (limit: number = 3) => {
  if (limit > projectList.length) {
    return projectList;
  }
  const projects: SkillsI[] = [];
  projectList.map((project, index) => {
    if (index + 1 <= limit) {
      projects.push(project);
    }
  });
  return projects;
};
