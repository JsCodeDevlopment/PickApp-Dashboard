import { MutableRefObject, useRef, useState } from "react";
import {
  BtnOrderStatus,
  IOrderPopUpProps,
  OrderStatus,
} from "../interfaces/IOrderPopUpProps";
import { useOrder } from "../servises/api/OrdersRequest";
import { useOrderContext } from "../context/OrderContext";
import { ChangeOrderObservationsDialog } from "./ChangeOrderObservationsDialog";
import Edit from "../assets/images/edit.png";
import { OrderObservationsFomr } from "./OrderObservationForm";
import dayjs from "dayjs";
import { baseURL } from "../servises/BackEndBaseURL";

export function OrderDialog({
  table,
  itens,
  products,
  status,
  id,
  observations,
  createdAt,
  creator,
}: IOrderPopUpProps) {
  const showModalBtn = useRef(
    null
  ) as MutableRefObject<null | HTMLDialogElement>;
  const [isClosed, setIsClosed] = useState<boolean>(false);
  const [observation, setObservations] = useState<string | undefined>(
    (observations && observations) || undefined
  );

  const criado = dayjs(createdAt).format("DD/MM/YYYY - HH:mm");

  const { ChangeOrderStatus, DeleteOrder } = useOrder();
  const { RequestOrders } = useOrderContext();

  const handleClick = () => {
    if (showModalBtn.current) {
      showModalBtn.current.showModal();
    }
  };

  function BtnStatus(status: keyof typeof OrderStatus) {
    return status === "IN_PRODUCTION"
      ? BtnOrderStatus.IN_PRODUCTION
      : status === "WAITING"
      ? BtnOrderStatus.WAITING
      : BtnOrderStatus.CANCELED;
  }

  async function handleChangeStatus(
    id: string,
    status: keyof typeof OrderStatus
  ) {
    switch (status) {
      case "WAITING":
        await ChangeOrderStatus({ id, status: "IN_PRODUCTION" });
        RequestOrders();
        break;
      case "IN_PRODUCTION":
        await ChangeOrderStatus({ id, status: "DONE" });
        RequestOrders();
        break;
    }
  }

  async function handleCanceled(id: string) {
    await ChangeOrderStatus({ id, status: "CANCELED" });
    await RequestOrders();
  }

  async function handleDeleteOrder(id: string) {
    await DeleteOrder({ id });
    await RequestOrders();
  }

  return (
    <div
      className="flex flex-col w-full h-24 rounded-md bg-base-100 items-center justify-center cursor-pointer"
      onClick={handleClick}
    >
      <h1>{table}</h1>
      {itens <= 1 ? <p>{itens} item</p> : <p>{itens} itens</p>}
      <dialog ref={showModalBtn} className="modal">
        <div className="modal-box overflow-y-auto scrollbar-thin scrollbar-thumb-neutral scrollbar-track-base-100 cursor-default">
          <div className="flex flex-col gap-5">
            <div className="flex w-full items-center justify-between">
              <h1 className="font-bold text-2xl">{table}</h1>
              <p className="text-sm font-light">
                Press ESC key or click outside to close
              </p>
            </div>
            <div className="flex gap-1 items-center justify-between">
              <div className="flex flex-col gap-0 items-center">
                <p className="text-sm font-light">Status do Pedido</p>
                <p className="text-base font-semibold">{OrderStatus[status]}</p>
              </div>
              <div className="flex flex-col gap-0 items-center">
                <p className="text-sm font-light">Data de Criação</p>
                <p className="text-base font-semibold">{criado}</p>
              </div>
            </div>
            {creator && (
              <div className="flex flex-col gap-1">
                <p className="text-sm font-light">Criado por</p>
                <div className="flex gap-3 items-center">
                  <img
                    src={`${baseURL}/uploads/${creator.imagePath}`}
                    alt="soueu"
                    className="w-12 rounded-full"
                  />
                  <p className="text-base font-semibold text-ellipsis">
                    {creator.name}
                  </p>
                </div>
              </div>
            )}
            <div className="flex flex-col gap-3 p-2 rounded-md bg-base-300">
              <p className="text-sm font-light">Itens</p>
              {products.map(({ product, quantity }) => (
                <div
                  key={product._id}
                  className="flex w-full p-1 bg-base-200 rounded-md shadow-md gap-3"
                >
                  <img
                    className="w-14 h-12 object-cover rounded-md"
                    src={`${import.meta.env.VITE_API_URL}/uploads/${
                      product.imagePath
                    }`}
                    alt=""
                  />
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
                    .reduce(
                      (acc, { product, quantity }) =>
                        acc + product.price * quantity,
                      0
                    )
                    .toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-2 rounded-md bg-base-300 relative">
              <p className="text-sm font-light">Observações:</p>
              {observations && (
                <>
                  <h1 className="font-medium">
                    {observations && observations}
                  </h1>
                  {status === "WAITING" && (
                    <ChangeOrderObservationsDialog
                      isClosed={isClosed}
                      setIsClosed={setIsClosed}
                      icon={Edit}
                    >
                      <h1 className="font-bold text-xl text-base-content">
                        Alterar Observação
                      </h1>
                      <OrderObservationsFomr
                        observations={observation}
                        setObservations={setObservations}
                        setIsClosed={setIsClosed}
                        orderId={id}
                        requestOrders={RequestOrders}
                      />
                    </ChangeOrderObservationsDialog>
                  )}
                </>
              )}
            </div>
            <div className="flex w-full gap-3 flex-col">
              {status === "CANCELED" ? (
                <button
                  onClick={() => handleDeleteOrder(id)}
                  className="btn btn-block btn-ghost text-danger"
                >
                  {BtnStatus(status)}
                </button>
              ) : (
                <>
                  {status === "DONE" ? (
                    <button
                      onClick={() => handleCanceled(id)}
                      className="btn btn-block btn-ghost text-primary"
                    >
                      Cancelar Pedido
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => handleChangeStatus(id, status)}
                        className="btn btn-block"
                      >
                        {BtnStatus(status)}
                      </button>
                      <button
                        onClick={() => handleCanceled(id)}
                        className="btn btn-block btn-ghost text-primary"
                      >
                        Cancelar Pedido
                      </button>
                    </>
                  )}
                </>
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
