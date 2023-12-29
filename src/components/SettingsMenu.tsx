import Profile from "../assets/images/cartooon.png";

export function SettingsMenu() {
  const divStyle = {
    backgroundImage: `url(${Profile})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1 rounded-full w-16 h-16 border-hidden hover:border-solid hover:border-2 hover:border-base-100"
        style={divStyle}
      ></div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow gap-2 bg-base-100 rounded-box w-52"
      >
        <li className="menu-title">Configurações</li>
        <hr />
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
}
