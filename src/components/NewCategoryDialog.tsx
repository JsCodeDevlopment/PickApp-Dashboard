import { Dispatch, ReactNode, SetStateAction, useRef } from "react";
import Add from "../assets/images/PlusLight.png";


export function NewCategoryDialog({ children, isClosed, setIsClosed }: { children: ReactNode, isClosed: boolean, setIsClosed: Dispatch<SetStateAction<boolean>> }) {
  const modalBtn = useRef(null) as React.MutableRefObject<null | HTMLDialogElement>;

  const handleClick = () => {
    if (modalBtn.current) {
      modalBtn.current.showModal();
    }
  };
  
  if (isClosed) {
    setIsClosed(false)
    modalBtn.current?.close()
  }

  return (
    <div
      className="flex flex-col btn btn-square btn-neutral btn-sm rounded-md items-center justify-center cursor-pointer"
      onClick={handleClick}>
        <img src={Add} alt="" />
      <dialog ref={modalBtn} className="modal">
        <div className="modal-box">
          <div className="flex flex-col gap-5">
            <div className="flex w-full items-center justify-end">
              <p className="text-sm font-light">
                Press ESC key or click outside to close
              </p>
            </div>
            {children}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
