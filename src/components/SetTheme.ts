import { useState } from "react";

export function SetThemes() {
  const [currentTheme, setCurrentTheme] = useState("mytheme");
  return { currentTheme, setCurrentTheme };
}
