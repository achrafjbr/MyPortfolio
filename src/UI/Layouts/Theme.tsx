"use client";

import { Theme, useThemeContext } from "@/src/app/_types/theme";
import { SunMoon } from "lucide-react";

function ThemeButton() {
  const { theme, setTheme } = useThemeContext();

  return (
    <span
      onClick={() => setTheme(theme == Theme.LIGHT ? Theme.DARK : Theme.LIGHT)}
      className="flex-1"
    >
      <SunMoon size={25} />
    </span>
  );
}

export default ThemeButton;
