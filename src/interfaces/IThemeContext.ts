import { Dispatch, SetStateAction } from "react";
import { ThemeOptions } from "./IThemes";

export interface IThemeContext {
  currentTheme: keyof typeof ThemeOptions;
  setCurrentTheme: Dispatch<SetStateAction<keyof typeof ThemeOptions>>;
}