import { Dispatch, SetStateAction } from "react";
import { IThemeOptions } from "./IThemes";

export interface IThemeContext {
  currentTheme: keyof typeof IThemeOptions;
  setCurrentTheme?: Dispatch<SetStateAction<keyof typeof IThemeOptions>>;
  SelectTheme: (theme: keyof typeof IThemeOptions) => void
}