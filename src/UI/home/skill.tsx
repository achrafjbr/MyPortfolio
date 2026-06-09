import { SkillI } from "../../app/_types/skills";

function Skill({ skill }: SkillI): React.JSX.Element {
  return (
    <div className="bg-gray-100 font-extralight text-[0.8rem] rounded-2xl p-1.5">
      {skill}
    </div>
  );
}

export default Skill;
