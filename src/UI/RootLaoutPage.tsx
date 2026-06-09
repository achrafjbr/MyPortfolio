"use client";
import React from "react";
import NavBar from "./Layouts/NavBar";
import { Theme, useThemeContext } from "../app/_types/theme";

function RootLaoutPage({ children }: { children: React.ReactNode }) {
  const { theme } = useThemeContext();

  return (
    <body
      className={`min-h-full flex flex-col ${theme == Theme.LIGHT ? "bg-white text-black" : "bg-black text-white"}`}
    >
      <NavBar />
      <div className="pt-[1%] px-11">{children}</div>
    </body>
  );
}

export default RootLaoutPage;
