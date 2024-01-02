import { useEffect } from "react";
import { Category } from "../components/Category";
import { Header } from "../components/Header";
import { OrderPopUp } from "../components/OrderPopUp";
import { OrderStatus } from "../interfaces/IOrderPopUpProps";
import { useRequestProducts } from "../servises/api/OrdersRequest";

export function Dashboard() {
  const { getOrders, orders } = useRequestProducts()

  useEffect(()=>{
    getOrders()
  }, [])

  console.log(orders);
  

  return (
    <div className="bg-base-100 w-full h-screen overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-neutral scrollbar-track-base-100">
      <Header />
      <div className="flex w-full h-screen py-10 items-start justify-center">
        <div className="flex gap-5 flex-wrap items-start justify-between max-lg:justify-evenly">
          <Category name={OrderStatus.WAITING} quantity={orders.filter((order)=> order.status === "WAITING").length}>
            {orders?.filter((order)=> order.status === "WAITING").map((order) => (
              <OrderPopUp
                key={order._id}
                table={order.table}
                itens={order.products.length}
                status={order.status}
                products={order.products}
              />
            ))}
          </Category>
          <Category name={OrderStatus.IN_PRODUCTION} quantity={orders.filter((order)=> order.status === "IN_PRODUCTION").length}>
            {orders?.filter((order)=> order.status === "IN_PRODUCTION").map((order) => (
              <OrderPopUp
                key={order._id}
                table={order.table}
                itens={order.products.length}
                status={order.status}
                products={order.products}
              />
            ))}
          </Category>
          <Category name={OrderStatus.DONE} quantity={orders.filter((order)=> order.status === "DONE").length}>
            {orders?.filter((order)=> order.status === "DONE").map((order) => (
              <OrderPopUp
                key={order._id}
                table={order.table}
                itens={order.products.length}
                status={order.status}
                products={order.products}
              />
            ))}
          </Category>
          <Category name={OrderStatus.CANCELED} quantity={orders.filter((order)=> order.status === "CANCELED").length}>
            {orders?.filter((order)=> order.status === "CANCELED").map((order) => (
              <OrderPopUp
                key={order._id}
                table={order.table}
                itens={order.products.length}
                status={order.status}
                products={order.products}
              />
            ))}
          </Category>
        </div>
      </div>
    </div>
  );
}
