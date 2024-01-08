import { useState, createContext, useContext, ReactNode } from "react";
import { IThemeOptions } from "../interfaces/IThemes";
import { IThemeContext } from "../interfaces/IThemeContext";

export const ThemeContext = createContext({} as IThemeContext);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<keyof typeof IThemeOptions>(
    () => localStorage.getItem("theme") as keyof typeof IThemeOptions ?? "mytheme"
  );

  const SelectTheme = (theme: keyof typeof IThemeOptions) => {
    localStorage.setItem("theme", theme);
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{ SelectTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
