import { Link } from "react-router-dom";
import Profile from "../assets/images/cartooon.png";
import ThemeIcon from "../assets/images/theme.png";
import UserIcon from "../assets/images/User.png";
import LogOutIcon from "../assets/images/LogOut.png";

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
        className="btn m-1 rounded-full w-16 h-16 border-solid border-2 hover:border-base-100"
        style={divStyle}>          
        </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow gap-2 bg-base-100 rounded-box w-52">
        <li className="menu-title">Configurações</li>
        <hr />
        <li>
          <Link to={"/dashboard"}><img className="w-4 h-4" src={UserIcon}/> Edit Profile</Link>
        </li>
        <li>
          <Link to={"/dashboard/theme"}><img className="w-4 h-4" src={ThemeIcon}/> Themes</Link>
        </li>
        <hr />
        <li>
          <a><img className="w-4 h-4" src={LogOutIcon}/> Log-out</a>
        </li>
      </ul>
    </div>
  );
}
