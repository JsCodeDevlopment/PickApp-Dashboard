import { Dispatch, SetStateAction, useRef } from "react";
import Trash from "../assets/images/Trash.png";

interface IProductDialogProps {
  isClosed: boolean;
  setIsClosed: Dispatch<SetStateAction<boolean>>;
}

export function ProductDialog({ setIsClosed, isClosed }: IProductDialogProps) {
  const modalBtn = useRef(null) as React.MutableRefObject<null | HTMLDialogElement>;

  const handleClick = () => {
    if (modalBtn.current) {
      modalBtn.current.showModal();
    }
  };

  if (isClosed) {
    setIsClosed(false);
    modalBtn.current?.close();
  }

  return (
    <div
      className="flex flex-col w-full items-center justify-center cursor-pointer"
      onClick={handleClick}>
      <div className="flex w-full p-2 gap-5 items-center justify-between rounded-md bg-neutral shadow-md">
        <div className="flex gap-5 max-sm:w-full max-sm:gap-2">
          <p className="text-xl font-semibold text-neutral-content">
            PRODUTO AQUI
          </p>
        </div>
        <div className="flex gap-2">
          <img src={Trash} alt="" />
        </div>
      </div>
      <dialog ref={modalBtn} className="modal">
        <div className="modal-box">
          <div className="flex flex-col gap-5">
            <div className="flex w-full items-center justify-end">
              <p className="text-sm font-light">
                Press ESC key or click outside to close
              </p>
            </div>
            algo aqui
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
