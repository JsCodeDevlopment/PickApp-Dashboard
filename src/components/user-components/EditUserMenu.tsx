import { Link } from "react-router-dom";
import Edit from "../../assets/images/edit.png";
import Password from "../../assets/images/Password.png";

export function EditUserMenu() {
  return (
    <div className="flex w-72 p-1 items-center bg-base-300 flex-col rounded-md max-sm:w-full">
      <div className="flex w-full p-1 bg-base-200 rounded-md items-center justify-center">
        <h1 className="text-lg font-semibold">Configurações Pessoais</h1>
      </div>
      <ul className="flex w-full flex-col pt-2 gap-2">
        <Link to={"/dashboard/edit-profile"}>
          <li className="flex p-2 rounded-md cursor-pointer gap-2 bg-neutral text-neutral-content">
            <img src={Edit} alt="" />
            Editar Perfil
          </li>
        </Link>
        <Link to={"/dashboard/edit-profile/change-password"}>
          <li className="flex p-2 rounded-md cursor-pointer gap-2 bg-neutral text-neutral-content">
            <img src={Password} alt="" />
            Trocar Senha
          </li>
        </Link>
      </ul>
    </div>
  );
}
