import { useState } from "react";
import { Theme } from "../app/_types/theme";

export function useTheme(theme: Theme = Theme.LIGHT) {
  const themeData = useState(theme);
  return themeData;
}
