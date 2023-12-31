import { useState, createContext, useContext, ReactNode } from "react";
import { ThemeOptions } from "../interfaces/IThemes";
import { IThemeContext } from "../interfaces/IThemeContext";

export const ThemeContext = createContext({} as IThemeContext);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<keyof typeof  ThemeOptions>("mytheme");

  return (
    <ThemeContext.Provider value={{ setCurrentTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
