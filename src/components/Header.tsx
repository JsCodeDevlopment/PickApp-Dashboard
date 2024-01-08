import { Link } from "react-router-dom";
import Logo from "../assets/images/logo-for-lightBG.png";
import LogoDark from "../assets/images/logo-for-darkBG.png";
import { SettingsMenu } from "./SettingsMenu";
import { useTheme } from "../context/ThemeContext";

export function Header() {
  const { currentTheme } = useTheme();

  return (
    <div className="flex w-full h-36 px-5 bg-primary items-center justify-between max-md:flex-wrap-reverse max-sm:h-auto max-sm:py-5 max-sm:gap-5 max-sm:justify-center">
      {currentTheme === "mytheme" ? (
        <Link to={"/dashboard"}><img src={LogoDark} alt="" className="w-40" /></Link>
      ) : (
        <Link to={"/dashboard"}><img src={Logo} alt="" className="w-40" /></Link>
      )}
      <div className="flex w-auto gap-5 items-center justify-center">
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold text-primary-content">
            Pedidos
          </h1>
          <p className="text-primary-content">
            Acompanhe os pedidos dos clientes
          </p>
        </div>
        <SettingsMenu />
      </div>
    </div>
  );
}
