import Logo from "../assets/images/logo-for-darkBG.png";
import Profile from "../assets/images/cartooon.png";

export function Header() {
  return (
    <div className="flex w-full h-36 px-5 bg-primary items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold">Pedidos</h1>
        <p>Acompanhe os pedidos dos clientes</p>
      </div>
      <div className="flex w-auto gap-5 items-center justify-center">
        <img src={Logo} alt="" className="w-40" />
        <img src={Profile} alt="" className="w-16" />
      </div>
    </div>
  );
}
