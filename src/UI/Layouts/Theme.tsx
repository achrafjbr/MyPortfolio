"use client";

import { Theme, useThemeContext } from "@/src/app/_types/theme";
import { Moon, Sun } from "lucide-react";

function ThemeButton() {
  const { theme, setTheme } = useThemeContext();

  return (
    <span
      onClick={() => setTheme(theme == Theme.LIGHT ? Theme.DARK : Theme.LIGHT)}
      className="flex-1"
    >
      {theme == Theme.LIGHT ? <Sun size={25} /> : <Moon size={25} />}
    </span>
  );
}

export default ThemeButton;
