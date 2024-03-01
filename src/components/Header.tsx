import { Link } from "react-router-dom";
import Logo from "../assets/images/logo-for-lightBG.png";
import LogoDark from "../assets/images/logo-for-darkBG.png";
import { SettingsMenu } from "./SettingsMenu";
import { useTheme } from "../context/ThemeContext";
import { MenuHamburguer } from "./MenuHamburguer";
import { MobileSttingsMenu } from "./MobileSettingsMenu";
import { useState } from "react";

export function Header() {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const { currentTheme } = useTheme();
  const darkThemes = [
    "mytheme",
    "bumblebee",
    "synthwave",
    "retro",
    "valentine",
    "garden",
    "dracula",
    "autumn",
    "sunset",
    "coffee",
  ];
  const isDarkTheme = darkThemes.includes(currentTheme);
  return (
    <div className="flex w-full relative h-36 px-5 bg-primary items-center justify-between max-md:flex-wrap-reverse max-sm:h-auto max-sm:py-5 max-sm:gap-5">
      <Link to={"/dashboard"}>
        <img src={isDarkTheme ? LogoDark : Logo} alt="" className="w-40" />
      </Link>
      <div className="flex w-auto gap-5 items-center justify-center">
        <div className="flex flex-col max-sm:hidden">
          <h1 className="text-2xl font-semibold text-neutral-content">
            Pedidos
          </h1>
          <p className="text-neutral-content">
            Acompanhe os pedidos dos clientes
          </p>
        </div>
        <SettingsMenu />
        <MenuHamburguer setIsVisible={setIsVisible}/>
        {isVisible && <MobileSttingsMenu/>}
      </div>
    </div>
  );
}
