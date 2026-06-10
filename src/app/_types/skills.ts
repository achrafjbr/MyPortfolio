export interface SkillsI {
  skills: string[];
  projectName: string;
  projectDescription: string;
}

export interface SkillI {
  skill: string;
}

export enum Level {
  DÈBUTANT = "débutant",
  AVANCÈ = "avancé",
  INTERMEDIARE = "intermediaire",
}

export interface ICompetence {
  tech: string;
  level: Level;
  image: string;
}
