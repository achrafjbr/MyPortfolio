"use client";
import { Mail } from "lucide-react";
import Link from "next/link";

function OutlookMessage() {
  return (
    <Link href="https://live.com" target="_blank" rel="noopener noreferrer">
      <div className="flex gap-x-2.5 cursor-pointer">
        <Mail color="gray" />
        <p className="text-gray-500 text-[1rem] font-sans">
          achrafeljabbar@hotmail.com
        </p>
      </div>
    </Link>
  );
}

export default OutlookMessage;
