import { useTheme } from "../context/ThemeContext";
import { ThemeOptions } from "../interfaces/IThemes";

interface IThemeProps {
    theme: keyof typeof ThemeOptions
}

export function Themes({theme}: IThemeProps) {
  const { SelectTheme } = useTheme();

  return (
    <div onClick={() => SelectTheme(theme)} data-theme={theme} className="flex w-36 h-32 rounded-md justify-start hover:cursor-pointer hover:scale-105">
      <div className="flex w-5 h-full bg-base-300 rounded-md"></div>
      <div className="flex w-full gap-4 flex-col rounded-md bg-base-200 p-5">
        <h1 className="text-xl">{theme}</h1>
        <div className="flex gap-2">
          <div className="flex w-6 h-6 bg-primary rounded-md items-center justify-center text-white">A</div>
          <div className="flex w-6 h-6 bg-neutral rounded-md items-center justify-center text-white">A</div>
          <div className="flex w-6 h-6 bg-accent rounded-md items-center justify-center text-white">A</div>
        </div>
      </div>
    </div>
  );
}
