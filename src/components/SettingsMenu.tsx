import { Link } from "react-router-dom";
import ThemeIcon from "../assets/images/theme.png";
import Burguer from "../assets/images/Hamburger.png";
import UserIcon from "../assets/images/User.png";
import Cart from "../assets/images/CartLight.png";
import LogOutIcon from "../assets/images/LogOut.png";
import { useLogin } from "../context/LoginContext";
import { baseURL } from "../servises/BackEndBaseURL";

export function SettingsMenu() {
  const { logout, logedUser } = useLogin()

  const divStyle = {
    backgroundImage: `url(${baseURL}/uploads/${logedUser?.user.imagePath})`,
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
        className="dropdown-content z-[1] menu p-2 shadow gap-2 bg-neutral rounded-box w-52">
        <li className="menu-title text-neutral-content">Options</li>
        <hr />
        <li>
          <Link to={"/dashboard"} className="text-neutral-content"><img className="w-4 h-4" src={UserIcon}/> Edit Profile</Link>
        </li>
        <li>
          <Link to={"/dashboard/theme"} className="text-neutral-content"><img className="w-4 h-4" src={ThemeIcon}/> Themes</Link>
        </li>
        <li>
          <Link to={"/dashboard/newitem"} className="text-neutral-content"><img className="w-4 h-4" src={Burguer}/>Create Items</Link>
        </li>
        <li>
          <Link to={"/dashboard/neworder"} className="text-neutral-content"><img className="w-4 h-4" src={Cart}/>Create Order</Link>
        </li>
        <hr />
        <li onClick={logout}>
          <a className="text-neutral-content"><img className="w-4 h-4" src={LogOutIcon}/> Log-out</a>
        </li>
      </ul>
    </div>
  );
}
