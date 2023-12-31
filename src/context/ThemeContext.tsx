import { useState, createContext, useContext, Dispatch, SetStateAction, ReactNode } from "react";
import { ThemeOptions } from "../interfaces/IThemes";

interface IThemeContext {
  currentTheme: keyof typeof ThemeOptions;
  setCurrentTheme: Dispatch<SetStateAction<keyof typeof  ThemeOptions>>;
}

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
