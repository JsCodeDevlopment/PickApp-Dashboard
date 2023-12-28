import { useRef } from "react";
import HGBR from "../assets/images/hbgr.jpeg";
import PIZZA from "../assets/images/pizza.png";

export function OrderPopUp({ table, itens }) {
  const showModalBtn = useRef(
    null
  ) as React.MutableRefObject<null | HTMLDialogElement>;

  const handleClick = () => {
    if (showModalBtn.current) {
      showModalBtn.current.showModal();
    }
  };

  return (
    <div
      className="flex flex-col w-full h-24 rounded-md bg-base-100 items-center justify-center"
      onClick={handleClick}
    >
      <h1>{table}</h1>
      <p>{itens}</p>
      <dialog ref={showModalBtn} className="modal">
        <div className="modal-box">
          <div className="flex flex-col gap-5">
            <div className="flex w-full items-center justify-between">
              <h1 className="font-bold text-2xl">{table}</h1>
              <p className="text-sm font-light">Press ESC key or click outside to close</p>
            </div>
            <div className="flex flex-col gap-0">
              <p className="text-sm font-light">Status do Pedido</p>
              <p className="text-base font-semibold">Categoria aqui</p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-sm font-light">Itens</p>
              <div className="flex w-full gap-5">
                <img className="w-12 h-10 rounded-md" src={HGBR} alt="" />
                <p className="text-sm font-light">1x</p>
                <div className="flex flex-col gap-1">
                  <p className="text-base font-semibold">X - TUDO</p>
                  <p className="text-sm font-light">R$ 12,00</p>
                </div>
              </div>
              <div className="flex w-full gap-5">
                <img className="w-12 h-10 rounded-md" src={PIZZA} alt="" />
                <p className="text-sm font-light">2x</p>
                <div className="flex flex-col gap-1">
                  <p className="text-base font-semibold">Pizza Calabresa G</p>
                  <p className="text-sm font-light">R$ 30,00</p>
                </div>
              </div>
              <div className="flex w-full justify-between">
                <p className="text-sm font-light">Total</p>
                <p className="text-base font-semibold">R$ 72,00</p>
              </div>
            </div>
            <div className="flex w-full gap-3 flex-col">
            <button className="btn btn-block">✔ Concluir Pedido</button>
            <button className="btn btn-block btn-ghost text-primary">Cancelar Pedido</button>
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
