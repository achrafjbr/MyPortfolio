import Project from "../UI/Project";
import Skill from "../UI/skill";
import VuProjects from "../UI/VuProjects";
import { Skills } from "../app/_types/skills";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
} from "./_dummyData/project";

export default function Home() {
  return (
    <section className="flex flex-col pt-[10%] text-center items-center gap-y-1">
      <h1 className="text-5xl md:text-6xl mb-2  font-semibold">
        Bonjour, je suis Achraf El jabbar
      </h1>
      <p className="text-2xl md:text-3xl text-muted-foreground mb-3 font-light text-gray-500 ">
        Développeur Fullstack & Flutter
      </p>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-centertext-gray-500">
        Passionné par la création d applications web modernes et performantes.
        Je transforme des idées en solutions numériques élégantes.
      </p>

      <VuProjects />

      <section className="grid grid-cols-3 gap-6 mx-1 mt-7 ">
        <Project
          skills={project1.skills}
          projectDescription={project1.projectDescription}
          projectName={project1.projectName}
        />

        <Project
          skills={project2.skills}
          projectDescription={project2.projectDescription}
          projectName={project2.projectName}
        />

        <Project
          skills={project3.skills}
          projectDescription={project3.projectDescription}
          projectName={project3.projectName}
        />

        <Project
          skills={project4.skills}
          projectDescription={project4.projectDescription}
          projectName={project4.projectName}
        />

        <Project
          skills={project5.skills}
          projectDescription={project5.projectDescription}
          projectName={project5.projectName}
        />
        <Project
          skills={project6.skills}
          projectDescription={project6.projectDescription}
          projectName={project6.projectName}
        />
      </section>
    </section>
  );
}
