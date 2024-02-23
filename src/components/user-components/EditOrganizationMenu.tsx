export function EditOrganizationMenu() {
  return (
    <div className="flex w-72 p-1 items-center bg-neutral flex-col rounded-md max-sm:w-full">
        <div className="flex w-full p-1 bg-base-300 rounded-md items-center justify-center">

      <h1 className="text-lg font-semibold">Configurações Organizacionais</h1>
        </div>
      <ul className="flex w-full flex-col pt-2 gap-2">
        <li className="flex p-2 rounded-md cursor-pointer bg-base-100">Alterar Permioções</li>
        <li className="flex p-2 rounded-md cursor-pointer bg-base-100">Deletar Usuários</li>
      </ul>
    </div>
  );
}
