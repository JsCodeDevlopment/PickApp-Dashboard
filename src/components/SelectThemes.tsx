import { useTheme } from "../context/ThemeContext";
import { ThemeOptions } from "../interfaces/IThemes";

export function SelectThemes() {
  const { setCurrentTheme } = useTheme();

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn bg-primary text-white m-1">
        Themes ↓
      </div>
      <ul
        id="options"
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        {Object.entries(ThemeOptions).map(([key, value]) => (
          <li
            onClick={() => setCurrentTheme(key as keyof typeof ThemeOptions)}
            className={`rounded-md text-black ${value}`}>
            <a>{key === ThemeOptions.mytheme ? "Default" : key}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
