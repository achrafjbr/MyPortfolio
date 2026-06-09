"use client";
import Link from "next/link";
import { JSX } from "react";
import DownloadCV from "./DownloadCV";
import ThemeUi from "./Theme";
import { Theme, useThemeContext } from "@/src/app/_types/theme";

function NavBar(): JSX.Element {
  return (
    <div
      className={` bg-gray-200/5 shadow flex py-6 justify-around font-medium text-gray-500 `}
    >
      <div className="  flex flex-1 justify-center items-center gap-x-4">
        <Link className="hover:text-black" href={"/"}>
          Accueil
        </Link>
        <Link className="hover:text-black" href={"/about"}>
          À propos
        </Link>
        <Link className="hover:text-black" href={"/portfolio"}>
          Portfolio
        </Link>
        <Link className="hover:text-black" href={"/skills"}>
          Compétences
        </Link>
        <Link className="hover:text-black" href={"/contact"}>
          Contact
        </Link>
      </div>

      <div className=" cursor-pointer flex items-center justify-end gap-x-3 pr-2">
        <DownloadCV />
        <ThemeUi />
      </div>
    </div>
  );
}

export default NavBar;
