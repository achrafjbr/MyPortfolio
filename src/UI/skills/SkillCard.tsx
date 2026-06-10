import { ICompetence } from "@/src/app/_types/skills";
import Image from "next/image";
import SkillLevel from "./SkillLevel";

function SkillCard({
  competence: { image, level, tech },
}: {
  competence: ICompetence;
}) {
  return (
    <div className="flex flex-1 gap-3 p-2 justify-start items-center rounded outline-1 outline-gray-300 ">
      <Image src={image} alt={image} width={30} height={30} loading="eager" />
      <div>
        {tech}
        <SkillLevel level={level} />
      </div>
    </div>
  );
}

export default SkillCard;
