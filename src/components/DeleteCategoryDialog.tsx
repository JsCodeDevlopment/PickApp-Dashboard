import { Dispatch, SetStateAction, useRef } from "react";
import Trash from "../assets/images/Trash.png";
import { useCategory } from "../servises/api/CategoryRequest";

interface IDeleteCategoryDialogProps {
  id: string;
  isClosed: boolean;
  setIsClosed: Dispatch<SetStateAction<boolean>>;
}

export function DeleteCategoryDialog({ id, isClosed, setIsClosed }: IDeleteCategoryDialogProps) {
  const modalBtn = useRef(null) as React.MutableRefObject<null | HTMLDialogElement>;
  
  const { DeleteCategory } = useCategory();


  const handleClick = () => {
    if (modalBtn.current) {
      modalBtn.current.showModal();
    }
  };

  if (isClosed) {
    setIsClosed(false);
    modalBtn.current?.close();
  }

  const handleReject = () => {
    setIsClosed(true);
  };


  const handleDeleteCategory = async (id: string) => {
    await DeleteCategory(id)
    setIsClosed(true)
  }

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
              <div className="flex w-full gap-3 items-center justify-around">
                <button className="btn btn-outline btn-primary w-28" onClick={() => handleDeleteCategory(id)}>
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
