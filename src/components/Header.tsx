import Logo from "../assets/images/logo-for-darkBG.png";
import { SettingsMenu } from "./SettingsMenu";

export function Header() {
  return (
    <div className="flex w-full h-36 px-5 bg-primary items-center justify-between max-md:flex-wrap-reverse max-sm:h-auto max-sm:py-5 max-sm:gap-5 max-sm:justify-center">
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold text-secondary">Pedidos</h1>
        <p className="text-secondary">Acompanhe os pedidos dos clientes</p>
      </div>
      <div className="flex w-auto gap-5 items-center justify-center">
        <img src={Logo} alt="" className="w-40" />
        <SettingsMenu/>
      </div>
    </div>
  );
}
