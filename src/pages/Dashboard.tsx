import { useEffect, useState } from "react";
import { Category } from "../components/category-components/Category";
import { Header } from "../components/Header";
import { OrderDialog } from "../components/OrderDialog";
import { OrderStatus } from "../interfaces/IOrderPopUpProps";
import { useOrderContext } from "../context/OrderContext";
import { toast } from "react-toastify";
import dayjs from "dayjs";

export function Dashboard() {
  const { RequestOrders, orders } = useOrderContext();
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [selectedDate, setSelectedDate] = useState(today);
  
  useEffect(() => {
    RequestOrders();
  }, [selectedDate]);

  const handleNextDay = () => {
    let nextDay = new Date(selectedDate);
    nextDay.setDate(nextDay.getDate() + 1);
    if (nextDay > new Date()) {
      toast.error("Não é possível visualizar pedidos futuros");
      return;
    }
    setSelectedDate(nextDay);
  };

  const handlePreviousDay = () => {
    let previousDay = new Date(selectedDate);
    previousDay.setDate(previousDay.getDate() - 1);
    setSelectedDate(previousDay);
  };

  return (
    <div className="bg-base-100 w-full h-screen overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-neutral scrollbar-track-base-100">
      <Header />
      <div className="flex w-full mt-3 items-center justify-center gap-5">
        <button className="btn btn-neutral btn-sm" onClick={handlePreviousDay}>Voltar</button>
        <p className="text-sm font-thin">{dayjs(selectedDate).format("DD/MM/YYYY")}</p>
        <button className={`btn btn-neutral btn-sm`} onClick={handleNextDay} disabled={selectedDate >= new Date(new Date().setHours(0, 0, 0, 0))}>Avançar</button>
      </div>
      <div className="flex w-full h-screen py-10 items-start justify-center">
        <div className="flex gap-5 flex-wrap items-start justify-between max-lg:justify-evenly">
          <Category
            name={OrderStatus.WAITING}
            quantity={
              orders.filter(
                (order) =>
                  order.status === "WAITING" &&
                  new Date(order.createdAt).setHours(0, 0, 0, 0) ===
                    selectedDate.setHours(0, 0, 0, 0)
              ).length
            }
          >
            {orders
              ?.filter(
                (order) =>
                  order.status === "WAITING" &&
                  new Date(order.createdAt).setHours(0, 0, 0, 0) ===
                    selectedDate.setHours(0, 0, 0, 0)
              )
              .map((order) => (
                <OrderDialog
                  key={order._id}
                  id={order._id}
                  table={order.table}
                  itens={order.products.length}
                  status={order.status}
                  products={order.products}
                  observations={order.observations}
                  createdAt={order.createdAt}
                  creator={order.creator}
                />
              ))}
          </Category>
          <Category
            name={OrderStatus.IN_PRODUCTION}
            quantity={
              orders.filter(
                (order) =>
                  order.status === "IN_PRODUCTION" &&
                  new Date(order.createdAt).setHours(0, 0, 0, 0) ===
                    selectedDate.setHours(0, 0, 0, 0)
              ).length
            }
          >
            {orders
              ?.filter(
                (order) =>
                  order.status === "IN_PRODUCTION" &&
                  new Date(order.createdAt).setHours(0, 0, 0, 0) ===
                    selectedDate.setHours(0, 0, 0, 0)
              )
              .map((order) => (
                <OrderDialog
                  key={order._id}
                  id={order._id}
                  table={order.table}
                  itens={order.products.length}
                  status={order.status}
                  products={order.products}
                  observations={order.observations}
                  createdAt={order.createdAt}
                  creator={order.creator}
                />
              ))}
          </Category>
          <Category
            name={OrderStatus.DONE}
            quantity={
              orders.filter(
                (order) =>
                  order.status === "DONE" &&
                  new Date(order.createdAt).setHours(0, 0, 0, 0) ===
                    selectedDate.setHours(0, 0, 0, 0)
              ).length
            }
          >
            {orders
              ?.filter(
                (order) =>
                  order.status === "DONE" &&
                  new Date(order.createdAt).setHours(0, 0, 0, 0) ===
                    selectedDate.setHours(0, 0, 0, 0)
              )
              .map((order) => (
                <OrderDialog
                  key={order._id}
                  id={order._id}
                  table={order.table}
                  itens={order.products.length}
                  status={order.status}
                  products={order.products}
                  observations={order.observations}
                  createdAt={order.createdAt}
                  creator={order.creator}
                />
              ))}
          </Category>
          <Category
            name={OrderStatus.CANCELED}
            quantity={
              orders.filter(
                (order) =>
                  order.status === "CANCELED" &&
                  new Date(order.createdAt).setHours(0, 0, 0, 0) ===
                    selectedDate.setHours(0, 0, 0, 0)
              ).length
            }
          >
            {orders
              ?.filter(
                (order) =>
                  order.status === "CANCELED" &&
                  new Date(order.createdAt).setHours(0, 0, 0, 0) ===
                    selectedDate.setHours(0, 0, 0, 0)
              )
              .map((order) => (
                <OrderDialog
                  key={order._id}
                  id={order._id}
                  table={order.table}
                  itens={order.products.length}
                  status={order.status}
                  products={order.products}
                  observations={order.observations}
                  createdAt={order.createdAt}
                  creator={order.creator}
                />
              ))}
          </Category>
        </div>
      </div>
    </div>
  );
}
