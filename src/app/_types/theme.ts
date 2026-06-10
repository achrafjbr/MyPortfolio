import { Dispatch, SetStateAction, useContext } from "react";
import { createContext } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export type ThemeContextType = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
};
