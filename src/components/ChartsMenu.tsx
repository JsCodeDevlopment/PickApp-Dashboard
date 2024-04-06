import { Link } from "react-router-dom";
import All from "../assets/images/ListChecks.png"

export function ChartsMenu() {
  return (
    <div className="flex w-72 p-1 items-center bg-base-300 flex-col rounded-md max-lg:w-full">
      <div className="flex w-full p-1 bg-base-200 rounded-md items-center justify-center">
        <h1 className="text-lg font-semibold">Opções de Relatórios</h1>
      </div>
      <ul className="flex w-full flex-col pt-2 gap-2">
        <Link to={"/charts"}>
          <li className="flex p-2 rounded-md cursor-pointer gap-1 bg-neutral text-neutral-content">
            <img src={All} alt="" />
            Todos os Pedidos
          </li>
        </Link>
        <Link to={"/dashboard/edit-profile/change-password"}>
          <li className="flex p-2 rounded-md cursor-pointer bg-neutral text-neutral-content">
            Produto mais Vendido
          </li>
        </Link>
      </ul>
    </div>
  );
}
