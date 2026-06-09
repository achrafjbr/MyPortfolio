"use client";

import { ArrowBigDownDash } from "lucide-react";

function DownloadCV() {
  const downlaodCVHanlder = () => {
    console.log("Download CV");
  };
  return (
    <span
      onClick={downlaodCVHanlder}
      className="flex gap-x-0.5 px-1 rounded outline-gray-300 outline-1"
    >
      <ArrowBigDownDash />
      CV
    </span>
  );
}

export default DownloadCV;
