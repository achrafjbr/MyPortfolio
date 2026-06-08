import { SkillsI } from "../app/_types/skills";
import Skill from "./skill";

function Project({ skills, projectName, projectDescription }: SkillsI) {
  return (
    <div className=" rounded-2xl hover:shadow hover:-translate-y-0.5 duration-100 text-start p-9 outline-1 outline-gray-300">
      <p className="pb-1.5 font-mono">{projectName}</p>
      <p className="pb-1.5 font-mono text-gray-500">{projectDescription}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((sk, index) => (
          <Skill key={sk} skill={sk} />
        ))}
      </div>
    </div>
  );
}

export default Project;
