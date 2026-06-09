import React from "react";
import { projectList } from "../../_dummyData/project";
import Project from "@/src/UI/home/Project";

function Portfolio(): React.JSX.Element {
  return (
    <section className="flex flex-col text-center items-center gap-y-1 pt-[7%]">
      <h1 className="text-5xl md:text-6xl mb-2 font-semibold  animate-text1 ">
        Mes projets
      </h1>

      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-gray-500 animate-text3">
        Une collection de mes réalisations professionnelles et personnelles.
        Chaque projet reflète ma passion pour le développement web.
      </p>

      <section className="px-4 py-3">
        <section className="grid translate duration-300 lg:grid-cols-3 sm:grid-cols-2 gap-6 mx-1 my-7 ">
          {projectList.map((project) => (
            <Project
              key={project.projectName}
              skills={project.skills}
              projectDescription={project.projectDescription}
              projectName={project.projectName}
            />
          ))}
        </section>
      </section>
    </section>
  );
}

export default Portfolio;
