import { useEffect, useState } from "react";
import { OrderItem } from "./OrderItem";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";
import { useOrder } from "../servises/api/OrdersRequest";
import { OrderObservationsFomr } from "./OrderObservationForm";
import { useOrderContext } from "../context/OrderContext";

export function Cart() {
  const [table, setTable] = useState<string>("");
  const [observations, setObservations] = useState<string | undefined>(undefined);

  const { CreateOrder } = useOrder();
  const {cartItem, clearAll} = useCart()
  const { tables, RequestTables } = useOrderContext();

  const getTables = async () => {
    await RequestTables();
  };
  useEffect(() => {
    getTables();
  }, []);

  const formattedOrders = cartItem.map((item) => ({
    product: item._id,
    quantity: item.quantity,
  }));
  const handleTableChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.target.selectedIndex - 1;
    const selectedOption = tables[selectedIndex].name;

    setTable(selectedOption);
  }

  const finishOrder = async ( table: string, products: { product: string; quantity: number }[], observations: string | undefined ) => {
    if (!table) {
      toast.error("Nenhuma mesa selecionada.", {
        autoClose: 1000 * 3,
      });
      return;
    }
    await CreateOrder(table, products, observations);
    clearAll()
    localStorage.removeItem("order");
  };
  return (
    <>
      {cartItem &&
        cartItem.map((order) => (
          <OrderItem
            order={order}
            key={order._id}/>
        ))}
      <div className="flex w-full bg-neutral rounded-md px-2 justify-between">
        <p className="text-md text-neutral-content font-semibold">Total</p>
        <p className="text-md text-neutral-content font-semibold">
          {cartItem
            .reduce((acc, order) => acc + order.price * order.quantity, 0)
            .toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
        </p>
      </div>
      <OrderObservationsFomr
        observations={observations}
        setObservations={setObservations}/>
      <div className="flex w-full items-center justify-center">
        <select
          value={table}
          onChange={handleTableChange}
          className="select select-bordered w-full max-w-xs">
          <option disabled value="">
            Escolha uma mesa
          </option>
          {tables &&
            tables
            .sort((a, b) => parseInt(a.name.split(' ')[1]) - parseInt(b.name.split(' ')[1]))
            .map((table) => (
              <option value={table.name} key={table._id}>{table.name}</option>
            ))}
        </select>
      </div>
      <button
        onClick={() => finishOrder(table, formattedOrders, observations ? observations : "Nenhuma observação.")}
        className="btn btn-block btn-primary text-danger">
        Finalizar Pedido
      </button>
    </>
  );
}
