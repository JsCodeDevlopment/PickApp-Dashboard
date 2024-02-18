import { useState } from "react";
import { ITables } from "../interfaces/ISelectProps";
import { OrderItem } from "./OrderItem";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";
import { useChangeOrderStatus } from "../servises/api/OrdersRequest";

export function Cart() {
  const [table, setTable] = useState<string>("");

  const { CreateOrder } = useChangeOrderStatus();
  const {orders, clearAll} = useCart()

  const tables: ITables = [
    { id: "1", name: "01" },
    { id: "2", name: "02" },
    { id: "3", name: "03" },
    { id: "4", name: "04" },
    { id: "5", name: "05" },
    { id: "6", name: "06" },
    { id: "7", name: "07" },
    { id: "8", name: "08" },
    { id: "9", name: "09" },
    { id: "10", name: "10" },
  ];

  const formattedOrders = orders.map((order) => ({
    product: order._id,
    quantity: order.quantity,
  }));
  const handleTableChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.target.selectedIndex - 1;
    const selectedOption = tables[selectedIndex].id;

    setTable(selectedOption);
  }

  const finishOrder = async (
    table: string,
    products: { product: string; quantity: number }[]
  ) => {
    if (!table) {
      toast.error("Nenhuma mesa selecionada.", {
        autoClose: 1000 * 3,
      });
      return;
    }
    await CreateOrder(table, products);
    clearAll()
    localStorage.removeItem("order");
  };
  return (
    <>
      {orders &&
        orders.map((order) => (
          <OrderItem
            order={order}
            key={order._id}/>
        ))}
      <div className="flex w-full bg-neutral rounded-md px-2 justify-between">
        <p className="text-md text-neutral-content font-semibold">Total</p>
        <p className="text-md text-neutral-content font-semibold">
          {orders
            .reduce((acc, order) => acc + order.price * order.quantity, 0)
            .toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
        </p>
      </div>
      <div className="flex w-full items-center justify-center">
        <select
          value={table}
          onChange={handleTableChange}
          className="select select-bordered w-full max-w-xs">
          <option disabled value="">
            Escolha uma mesa
          </option>
          {tables &&
            tables.map((table) => (
              <option value={table.id} key={table.id}>Mesa: {table.name}</option>
            ))}
        </select>
      </div>
      <button
        onClick={() => finishOrder(table, formattedOrders)}
        className="btn btn-block btn-primary text-danger">
        Finalizar Pedido
      </button>
    </>
  );
}
