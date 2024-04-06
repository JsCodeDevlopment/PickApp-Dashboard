import { Link } from "react-router-dom";
import { useLogin } from "../../context/LoginContext";
import { toast } from "react-toastify";
import Users from "../../assets/images/users.png";
import Tables from "../../assets/images/tables.png";

export function EditOrganizationMenu() {
  const { logedUser } = useLogin();

  const handleError = () => {
    toast.error(`Você não possui autorização para acessar essa página.`, {
      autoClose: 1000 * 3,
    });
  };

  return (
    <div className="flex w-72 p-1 items-center bg-base-300 flex-col rounded-md max-sm:w-full">
      <div className="flex w-full p-1 bg-base-200 rounded-md items-center justify-center">
        <h1 className="text-lg font-semibold">Configurações Organizacionais</h1>
      </div>
      <ul className="flex w-full flex-col pt-2 gap-2">
        {logedUser?.user.rule === "ADM" ? (
          <>
            <Link to={"/dashboard/edit-profile/user-management"}>
              <li className="flex p-2 rounded-md cursor-pointer gap-2 bg-neutral text-neutral-content">
                <img src={Users} alt="" />
                Gerenciamento de usuários
              </li>
            </Link>
            <Link to={"/dashboard/edit-profile/table-management"}>
              <li className="flex p-2 rounded-md cursor-pointer gap-2 bg-neutral text-neutral-content">
                <img src={Tables} alt="" />
                Gerenciamento de mesas
              </li>
            </Link>
          </>
        ) : (
          <>
            <li
              onClick={handleError}
              className="flex p-2 rounded-md cursor-pointer gap-2 bg-base-100">
              <img src={Users} alt="" />
              Gerenciamento de usuários
            </li>
            <li
              onClick={handleError}
              className="flex p-2 rounded-md cursor-pointer gap-2 bg-base-100">
              <img src={Tables} alt="" />
              Gerenciamento de mesas
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
