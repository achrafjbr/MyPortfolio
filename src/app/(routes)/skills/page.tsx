import Divider from "@/src/UI/Divider";
import SkillCard from "@/src/UI/skills/SkillCard";
import React from "react";
import {
  BackendCompetence,
  frondEndCompetence,
  toolsCompetence,
} from "../../_dummyData/competence";

function Skills(): React.JSX.Element {
  return (
    <section className="flex flex-col  gap-y-1 pt-[7%]">
      <h1 className="text-5xl md:text-6xl mb-2 font-semibold text-center  animate-text1 ">
        Compétences techniques
      </h1>
      <p className="text-lg text-center max-w-2xl mx-auto mb-8 text-gray-500 animate-text3">
        Une collection de mes réalisations professionnelles et personnelles.
        Chaque projet reflète ma passion pour le développement web.
      </p>

      <div className="px-[10%]">
        <Divider padding="pb-5" />
        <div className="w-full">
          <p className="lg:text-2xl text-start md:text-[0.8rem] font-semibold">
            Front end
          </p>
        </div>
        <Divider padding="pb-3" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {frondEndCompetence.map((frontSkill) => (
            <SkillCard key={frontSkill.tech} competence={frontSkill} />
          ))}
        </div>

        <Divider padding="pb-5" />
        <div className="w-full">
          <p className="lg:text-2xl text-start md:text-[0.8rem] font-semibold">
            Back end
          </p>
        </div>
        <Divider padding="pb-3" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4  ">
          {BackendCompetence.map((frontSkill) => (
            <SkillCard key={frontSkill.tech} competence={frontSkill} />
          ))}
        </div>

        <Divider padding="pb-5" />
        <div className="w-full">
          <p className="lg:text-2xl text-start md:text-[0.8rem] font-semibold">
            Outils
          </p>
        </div>
        <Divider padding="pb-3" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4  ">
          {toolsCompetence.map((frontSkill) => (
            <SkillCard key={frontSkill.tech} competence={frontSkill} />
          ))}
        </div>
        <Divider padding="pb-5" />
      </div>
    </section>
  );
}

export default Skills;
