import { Dispatch, ReactNode, SetStateAction, useRef } from "react";
import Add from "../../assets/images/PlusLight.png";

interface INewItemDialogProps {
  children: ReactNode;
  isClosed: boolean;
  setIsClosed: Dispatch<SetStateAction<boolean>>;
  icon?: string
}

export function NewItemDialog({ children, isClosed, setIsClosed, icon }: INewItemDialogProps) {
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
      className={!icon ? "flex flex-col btn btn-square btn-neutral btn-sm rounded-md items-center justify-center cursor-pointer" : "flex flex-col btn btn-square btn-ghost btn-sm rounded-md items-center justify-center cursor-pointer absolute top-[1.3rem] right-12"}
      onClick={handleClick}>
        <img src={icon ? icon : Add} alt="" />
      <dialog ref={modalBtn} className="modal">
        <div className="modal-box overflow-y-auto scrollbar-thin scrollbar-thumb-neutral scrollbar-track-base-100">
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
