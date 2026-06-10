"use client";
import { SocialMediaContact } from "@/src/app/_types/contact";
import Image from "next/image";

function SocialMediaProfile({
  contact: { platform, image },
}: {
  contact: SocialMediaContact;
}) {
  return (
    <section className="rounded-[0.6rem] outline-1 outline-gray-400 p-2 hover:bg-gray-300">
      <div className="flex gap-x-2.5">
        <Image src={image} alt={image} width={30} height={18} loading="eager" />
        <h1>{platform}</h1>
      </div>
    </section>
  );
}

export default SocialMediaProfile;
