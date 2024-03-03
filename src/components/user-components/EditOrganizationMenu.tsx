import { Link } from "react-router-dom";
import { useLogin } from "../../context/LoginContext";
import { toast } from "react-toastify";

export function EditOrganizationMenu() {
  const { logedUser } = useLogin();

  const handleError = () => {
    toast.error(`Você não possui autorização para acessar essa página.`, {
      autoClose: 1000 * 3,
    });
  };

  return (
    <div className="flex w-72 p-1 items-center bg-neutral flex-col rounded-md max-sm:w-full">
      <div className="flex w-full p-1 bg-base-300 rounded-md items-center justify-center">
        <h1 className="text-lg font-semibold">Configurações Organizacionais</h1>
      </div>
      <ul className="flex w-full flex-col pt-2 gap-2">
        {logedUser?.user.rule === "ADM" ? (
          <>
            <Link to={"/dashboard/edit-profile/user-management"}>
              <li className="flex p-2 rounded-md cursor-pointer bg-base-100">
                Gerenciamento de usuários
              </li>
            </Link>
          </>
        ) : (
          <li
            onClick={handleError}
            className="flex p-2 rounded-md cursor-pointer bg-base-100">
            Gerenciamento de usuários
          </li>
        )}
      </ul>
    </div>
  );
}
