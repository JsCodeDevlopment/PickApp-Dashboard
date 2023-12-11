import { useRef } from "react";
import { ICategoryProps } from "../interfaces/ICateroryProps";

export function OrderPopUp({ table, itens }: ICategoryProps) {
  const showModalBtn = useRef(null) as React.MutableRefObject<null | HTMLDialogElement>;
  console.log(showModalBtn.current);

  const handleClick = () => {
    if(showModalBtn.current){
        showModalBtn.current.showModal();
    }
  };

  return (
    <div className="flex flex-col w-full h-24 rounded-sm bg-base-100 items-center justify-center" onClick={handleClick}>
      <h1>{table}</h1>
      <p>{itens}</p>
      <dialog ref={showModalBtn} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
