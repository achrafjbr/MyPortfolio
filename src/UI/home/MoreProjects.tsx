"use client";

import { useEffect, useRef, useState } from "react";
import { showProjectByPagination } from "../../app/_dummyData/project";
import Project from "./Project";

function MoreProjects() {
  const [seeMoreProjects, setMoreProjects] = useState<number>(3);
  const scroll = useRef<HTMLDivElement>(null);
  const seeProjectsHandler = () => {
    setMoreProjects(seeMoreProjects + 3);
    showProjectByPagination(seeMoreProjects);
  };
  const smothScrollHandler = () => {
    scroll.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };
  useEffect(() => {
    if (seeMoreProjects > 3) {
      smothScrollHandler();
    }
  }, [seeMoreProjects]);
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

      <div ref={scroll} className="w-full flex justify-center items-center">
        <div
          className=" w-[15%] p-2 cursor-pointer rounded  text-[0.8rem] outline-1 outline-gray-300"
          onClick={() => {
            seeProjectsHandler();
          }}
        >
          Voir tous les project
        </div>
      </div>
    </section>
  );
}

export default MoreProjects;
