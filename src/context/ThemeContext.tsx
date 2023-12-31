import { useState, createContext, useContext, Dispatch, SetStateAction, ReactNode } from "react";
import { ThemeOptions } from "../interfaces/IThemes";

interface IThemeContext {
  currentTheme: ThemeOptions;
  setCurrentTheme: Dispatch<SetStateAction<ThemeOptions>>;
}

export const ThemeContext = createContext({} as IThemeContext);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<ThemeOptions>("mytheme");

  return (
    <ThemeContext.Provider value={{ setCurrentTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
