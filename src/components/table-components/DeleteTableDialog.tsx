import { Dispatch, SetStateAction, useRef } from "react";
import Trash from "../../assets/images/Trash.png";
import { useTable } from "../../servises/api/TableRequest";

interface IDeleteTableDialogProps {
  id: string;
  isClosed: boolean;
  setIsClosed: Dispatch<SetStateAction<boolean>>;
  FncToUpdate?: () => Promise<void>;
}

export function DeleteTableDialog({ id, isClosed, setIsClosed, FncToUpdate }: IDeleteTableDialogProps) {
  const modalBtn = useRef(null) as React.MutableRefObject<null | HTMLDialogElement>;
  const { DeleteTable } = useTable();

  const handleClick = () => {
    modalBtn.current && modalBtn.current.showModal()
  };

  if (isClosed) {
    setIsClosed(false);
    modalBtn.current?.close();
  }

  const handleReject = () => {
    setIsClosed(true);
  };

  const handleDeleteTable = async (id: string) => {
    setIsClosed(true);
    await DeleteTable(id);
    FncToUpdate && FncToUpdate();
  };

  return (
    <div
      className="flex flex-col btn btn-square btn-ghost btn-sm rounded-md items-center justify-center cursor-pointer"
      onClick={handleClick}>
      <img src={Trash} alt="" />
      <dialog ref={modalBtn} className="modal">
        <div className="modal-box">
          <div className="flex flex-col gap-5">
            <div className="flex w-full items-center justify-end">
              <p className="text-sm font-light">
                Press ESC key or click outside to close
              </p>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-5 p-2 rounded-md bg-base-300 shadow-lg">
              <h1 className="text-lg font-semibold">Está certo disso?</h1>
              <p className="text-sm font-light">
                Está certo de que quer deletar esta mesa? Após deletar, não será  possível recuperar.
              </p>
              <div className="flex w-full gap-3 items-center justify-around">
                <button
                  className="btn btn-outline btn-primary w-28"
                  onClick={() => handleDeleteTable(id)}>
                  Sim!
                </button>
                <button className="btn btn-outline w-28" onClick={handleReject}>
                  Não
                </button>
              </div>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
