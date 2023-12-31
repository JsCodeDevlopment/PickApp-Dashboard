import { SetThemes } from "./SetTheme";

export function SelectThemes() {
  const { setCurrentTheme } = SetThemes();

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn bg-primary text-white m-1">
        Themes ↓
      </div>
      <ul
        id="options"
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li
          onClick={() => setCurrentTheme("mytheme")}
          className="rounded-md text-black bg-[#E6324B]"
        >
          <a>Default</a>
        </li>
        <li
          onClick={() => setCurrentTheme("dark")}
          className="rounded-md text-black bg-[#1D232A]"
        >
          <a>Dark</a>
        </li>
        <li
          onClick={() => setCurrentTheme("light")}
          className="rounded-md text-black bg-white"
        >
          <a>Light</a>
        </li>
        <li
          onClick={() => setCurrentTheme("wireframe")}
          className="rounded-md text-black bg-[#B8B8B8]"
        >
          <a>Wireframe</a>
        </li>
        <li
          onClick={() => setCurrentTheme("dim")}
          className="rounded-md text-black bg-[#9FE88D]"
        >
          <a>Dim</a>
        </li>
        <li
          onClick={() => setCurrentTheme("sunsert")}
          className="rounded-md text-black bg-[#FF865B]"
        >
          <a>Sunset</a>
        </li>
      </ul>
    </div>
  );
}
