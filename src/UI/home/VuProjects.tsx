"use client";

import { ArrowBigRight } from "lucide-react";
import { useRouter } from "next/navigation";

function VuProjects() {
  const route = useRouter();
  return (
    <div>
      <div
        onClick={() => route.push("/portfolio")}
        className=" p-2 text-[0.8rem] cursor-pointer flex justify-center items-center gap-x-1 rounded text-white bg-[#030213]"
      >
        Voir mes projets
        <ArrowBigRight />
      </div>
    </div>
  );
}

export default VuProjects;
