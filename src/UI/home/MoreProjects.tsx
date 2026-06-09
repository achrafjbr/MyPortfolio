"use client";

import { useState } from "react";
import {
  project1,
  showProjectByPagination,
} from "../../app/_dummyData/project";
import Project from "./Project";

function MoreProjects() {
  const [seeMoreProjects, setMoreProjects] = useState<number>(3);
  const seeProjectsHandler = () => {
    setMoreProjects(seeMoreProjects + 3);
    showProjectByPagination(seeMoreProjects);
  };
  return (
    <section className="px-4 py-3">
      <section className="grid translate duration-300 lg:grid-cols-3 sm:grid-cols-2 gap-6 mx-1 my-7 ">
        {showProjectByPagination(seeMoreProjects).map((project) => (
          <Project
            key={project.projectName}
            skills={project.skills}
            projectDescription={project.projectDescription}
            projectName={project.projectName}
          />
        ))}
      </section>

      <div className="w-full flex justify-center items-center">
        <div
          className=" w-[15%] p-2 cursor-pointer rounded text-black text-[0.8rem] outline-1 outline-gray-300"
          onClick={() => seeProjectsHandler()}
        >
          Voir tous les project
        </div>
      </div>
    </section>
  );
}

export default MoreProjects;
