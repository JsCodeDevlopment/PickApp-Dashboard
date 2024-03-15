import { Dispatch, ReactNode, SetStateAction, useRef } from "react";

interface INewTableDialogProps {
  children: ReactNode
  isClosed: boolean
  setIsClosed: Dispatch<SetStateAction<boolean>>
  icon: string
}

export function SaveTableDialog({ children, isClosed, setIsClosed, icon }: INewTableDialogProps) {
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
        {icon && <img src={icon} alt="" />}
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
