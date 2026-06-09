import Divider from "@/src/UI/Divider";
import React from "react";

function Skills(): React.JSX.Element {
  return (
    <section className="flex flex-col text-center items-center gap-y-1 pt-[7%] text-black  ">
      <h1 className="text-5xl md:text-6xl mb-2 font-semibold  animate-text1 ">
        Compétences techniques
      </h1>

      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-gray-500 animate-text3">
        Une collection de mes réalisations professionnelles et personnelles.
        Chaque projet reflète ma passion pour le développement web.
      </p>

      <Divider padding="pb-5" />
      <div className="w-full">
        <p className="lg:text-2xl text-start md:text-[0.8rem] font-semibold">
          Front end
        </p>
      </div>
    </section>
  );
}

export default Skills;
