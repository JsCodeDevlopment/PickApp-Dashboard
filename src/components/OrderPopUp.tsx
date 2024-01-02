import { useRef } from "react";
import {BtnOrderStatus, IOrderPopUpProps, OrderStatus,} from "../interfaces/IOrderPopUpProps";
import { useChangeOrderStatus } from "../servises/api/OrdersRequest";

export function OrderPopUp({table, itens, products, status, id, setOrders}: IOrderPopUpProps) {
  const showModalBtn = useRef(null) as React.MutableRefObject<null | HTMLDialogElement>;
  const { changeOrderStatus } = useChangeOrderStatus()

  const handleClick = () => {
    if (showModalBtn.current) {
      showModalBtn.current.showModal();
    }
  };

  function BtnStatus (status: keyof typeof OrderStatus) {
    return status === "IN_PRODUCTION"
    ? BtnOrderStatus.IN_PRODUCTION
    : status === "WAITING"
    ? BtnOrderStatus.WAITING
    : BtnOrderStatus.CANCELED
  }

  function handleChangeStatus (id: string, status: keyof typeof OrderStatus) {
    switch (status) {
      case "WAITING": 
        changeOrderStatus({id, status: "IN_PRODUCTION"})
        break;
      case "IN_PRODUCTION": 
        changeOrderStatus({id, status: "DONE"})
        break;
    }
    setOrders()
  }

  return (
    <div
      className="flex flex-col w-full h-24 rounded-md bg-base-100 items-center justify-center"
      onClick={handleClick}>
      <h1>Mesa {table}</h1>
      {itens <= 1 ? <p>{itens} item</p> : <p>{itens} itens</p>}
      <dialog ref={showModalBtn} className="modal">
        <div className="modal-box">
          <div className="flex flex-col gap-5">
            <div className="flex w-full items-center justify-between">
              <h1 className="font-bold text-2xl">MESA {table}</h1>
              <p className="text-sm font-light">
                Press ESC key or click outside to close
              </p>
            </div>
            <div className="flex flex-col gap-0">
              <p className="text-sm font-light">Status do Pedido</p>
              <p className="text-base font-semibold">{OrderStatus[status]}</p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-sm font-light">Itens</p>
              {products.map(({ product, quantity }) => (
                <div key={product._id} className="flex w-full gap-5">
                  <img
                    className="w-12 h-10 rounded-md"
                    src={`${import.meta.env.VITE_API_URL}/uploads/${product.imagePath}`}
                    alt=""/>
                  <p className="text-sm font-light">{quantity}x</p>
                  <div className="flex flex-col gap-1">
                    <p className="text-base font-semibold">{product.name}</p>
                    <p className="text-sm font-light">
                      {product.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  </div>
                </div>
              ))}
              <div className="flex w-full justify-between">
                <p className="text-sm font-light">Total</p>
                <p className="text-base font-semibold">
                  {products
                  .reduce((acc, { product, quantity }) =>acc + product.price * quantity,0)
                    .toLocaleString("pt-BR",
                    {
                      style: "currency",
                      currency: "BRL",
                    })}
                </p>
              </div>
            </div>
            <div className="flex w-full gap-3 flex-col">
              {status === "DONE" ? (<></>) : 
              (
                <button onClick={() => handleChangeStatus( id, status ) } className="btn btn-block">
                  {BtnStatus(status)}
                </button>
              )}
              {status === "CANCELED" ? (<></>) : 
              (
                <button className="btn btn-block btn-ghost text-primary">
                  Cancelar Pedido
                </button>
              )}
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
