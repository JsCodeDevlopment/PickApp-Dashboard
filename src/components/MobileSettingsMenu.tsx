import ThemeIcon from "../assets/images/theme.png";
import Burguer from "../assets/images/Hamburger.png";
import Ctgy from "../assets/images/categories.png";
import UserIcon from "../assets/images/User.png";
import Cart from "../assets/images/CartLight.png";
import LogOutIcon from "../assets/images/LogOut.png";
import Chart from "../assets/images/Chart.png";
import { Link } from "react-router-dom";
import { useLogin } from "../context/LoginContext";

export function MobileSttingsMenu() {
  const { logedUser, logout } = useLogin();

  return (
    <div className="md:hidden absolute top-[9.5rem] right-5 w-[95%] rounded-md bg-neutral z-50 max-sm:w-56">
      <ul className="flex items-center justify-around p-3 flex-wrap max-sm:flex-col max-sm:items-start">
        <li className="hidden menu-title text-neutral-content max-sm:flex">
          Opções
        </li>
        {logedUser?.user.rule === "ADM" ? (
          <>
            <Link
              to={"/dashboard/edit-profile"}
              className="flex p-2 rounded-md hover:bg-base-300 max-sm:w-full">
              <li className="text-neutral-content flex items-center justify-center gap-2">
                <img className="w-4 h-4" src={UserIcon} /> Editar Perfil
              </li>
            </Link>
            <Link
              to={"/dashboard/theme"}
              className="flex p-2 rounded-md hover:bg-base-300 max-sm:w-full">
              <li className="text-neutral-content flex items-center justify-center gap-2">
                <img className="w-4 h-4" src={ThemeIcon} /> Temas
              </li>
            </Link>
            <Link
              to={"/dashboard/new-category"}
              className="flex p-2 rounded-md hover:bg-base-300 max-sm:w-full">
              <li className="text-neutral-content flex items-center justify-center gap-2">
                <img className="w-4 h-4" src={Ctgy} /> Categorias
              </li>
            </Link>
            <Link
              to={"/dashboard/new-item"}
              className="flex p-2 rounded-md hover:bg-base-300 max-sm:w-full">
              <li className="text-neutral-content flex items-center justify-center gap-2">
                <img className="w-4 h-4" src={Burguer} /> Produtos
              </li>
            </Link>
            <Link
              to={"/dashboard/new-order"}
              className="flex p-2 rounded-md hover:bg-base-300 max-sm:w-full">
              <li className="text-neutral-content flex items-center justify-center gap-2">
                <img className="w-4 h-4" src={Cart} /> Criar Pedido
              </li>
            </Link>
            <Link
              to={"/charts"}
              className="flex p-2 rounded-md hover:bg-base-300 max-sm:w-full">
              <li className="text-neutral-content flex items-center justify-center gap-2">
                <img className="w-4 h-4" src={Chart} /> Relatórios
              </li>
            </Link>
            <li
              className="flex p-2 rounded-md hover:bg-base-300 max-sm:w-full"
              onClick={logout}>
              <a className="text-neutral-content flex items-center justify-center gap-2">
                <img className="w-4 h-4" src={LogOutIcon} /> Sair
              </a>
            </li>
          </>
        ) : (
          <>
            <Link
              to={"/dashboard/edit-profile"}
              className="flex p-2 rounded-md hover:bg-base-300 max-sm:w-full">
              <li className="text-neutral-content flex items-center justify-center gap-2">
                <img className="w-4 h-4" src={UserIcon} /> Editar Perfil
              </li>
            </Link>
            <Link
              to={"/dashboard/theme"}
              className="flex p-2 rounded-md hover:bg-base-300 max-sm:w-full">
              <li className="text-neutral-content flex items-center justify-center gap-2">
                <img className="w-4 h-4" src={ThemeIcon} /> Temas
              </li>
            </Link>
            <Link
              to={"/dashboard/new-order"}
              className="flex p-2 rounded-md hover:bg-base-300 max-sm:w-full">
              <li className="text-neutral-content flex items-center justify-center gap-2">
                <img className="w-4 h-4" src={Cart} /> Criar Pedido
              </li>
            </Link>
            <li
              className="flex p-2 rounded-md hover:bg-base-300 max-sm:w-full"
              onClick={logout}>
              <a className="text-neutral-content flex items-center justify-center gap-2">
                <img className="w-4 h-4" src={LogOutIcon} /> Sair
              </a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
