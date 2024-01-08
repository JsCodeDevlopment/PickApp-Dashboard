import { useState, createContext, useContext, ReactNode } from "react";
import { ThemeOptions } from "../interfaces/IThemes";
import { IThemeContext } from "../interfaces/IThemeContext";

export const ThemeContext = createContext({} as IThemeContext);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] =
    useState<keyof typeof ThemeOptions>("mytheme");

  const SelectTheme = (theme: keyof typeof ThemeOptions) => {
    localStorage.setItem("theme", theme);
    setCurrentTheme(theme);
  };

  const SearchSavedTheme = () => {
    const savedTheme = localStorage.getItem("theme") as keyof typeof ThemeOptions;

    savedTheme ? setCurrentTheme(savedTheme) : setCurrentTheme("mytheme")
  };

  return (
    <ThemeContext.Provider value={{ SelectTheme, SearchSavedTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
