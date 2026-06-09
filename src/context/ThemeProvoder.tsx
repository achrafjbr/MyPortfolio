"use client";
import React from "react";
import { ThemeContext } from "../app/_types/theme";
import { useTheme } from "../hooks/useTheme";

function ThemeProvoder({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useTheme();
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvoder;
