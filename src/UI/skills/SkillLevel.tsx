import { Level } from "@/src/app/_types/skills";
import React from "react";

function SkillLevel({ level }: { level: Level }) {
  return (
    <div
      className={`rounded-2xl p-1 text-center text-[0.9rem]
    ${
      level == Level.DÈBUTANT
        ? "bg-red-400/20 text-red-400"
        : level == Level.INTERMEDIARE
          ? "bg-yellow-400/20 text-yellow-400"
          : "bg-green-400/20 text-green-400"
    }`}
    >
      {level}
    </div>
  );
}

export default SkillLevel;
