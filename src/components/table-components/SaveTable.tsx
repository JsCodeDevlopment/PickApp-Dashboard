import { useEffect, useState } from "react";
import Icon from "../../assets/images/categories.png";
import Add from "../../assets/images/PlusLight.png";
import { SaveTableDialog } from "./SaveTableDialog";
import { DeleteTableDialog } from "./DeleteTableDialog";
import { TableForm } from "./TableForm";
import { useOrderContext } from "../../context/OrderContext";

export function SaveTable() {
  const [isClosed, setIsClosed] = useState<boolean>(false);
  const [showAllTables, setShowAllTables] = useState<boolean>(false);

  const { RequestTables, tables } = useOrderContext();
  
  const getTables = async () => {
    await RequestTables();
  };
  useEffect(() => {
    getTables();
  }, []);

  return (
    <div className="flex flex-col w-96 gap-2 p-2 rounded-md bg-base-300 items-end max-md:w-full">
      <div className="flex justify-center items-center gap-2 w-full">
        <img className="w-6 h-6" src={Icon} />
        <h1 className="text-2xl font-semibold">Mesas</h1>
      </div>
      <SaveTableDialog icon={Add} setIsClosed={setIsClosed} isClosed={isClosed}>
        <h1 className="text-xl font-semibold">Adicionar Mesa</h1>
        <TableForm getTables={RequestTables} setIsClosed={setIsClosed} />
      </SaveTableDialog>
      {tables.length < 0 ? 
        <h1>Nenhuma mesa adicionada.</h1>
       : (
        tables
        .sort((a, b) => parseInt(a.name.split(' ')[1]) - parseInt(b.name.split(' ')[1]))
        .slice(0, showAllTables ? tables.length : 5)
        .map((table) => (
          <div
            className="flex w-full p-2 gap-5 items-center justify-between rounded-md bg-neutral shadow-md"
            key={table._id}>
            <div className="flex gap-5 max-sm:w-full max-sm:gap-2">
              <p className="text-xl font-semibold text-neutral-content">
                {table.name}
              </p>
            </div>
            <div className="flex gap-2">
              <DeleteTableDialog
                id={table._id}
                isClosed={isClosed}
                setIsClosed={setIsClosed}
                FncToUpdate={RequestTables}/>
            </div>
          </div>
        ))
      )}
      <div className="flex w-full items-center justify-center">
        <button
          className="btn btn-neutral"
          onClick={() => setShowAllTables(!showAllTables)}>
          {showAllTables ? "Mostrar menos" : "Mostrar mais"}
        </button>
      </div>
    </div>
  );
}
