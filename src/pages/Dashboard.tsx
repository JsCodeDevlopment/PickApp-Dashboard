import { useEffect } from "react";
import { Category } from "../components/category-components/Category";
import { Header } from "../components/Header";
import { OrderDialog } from "../components/OrderDialog";
import { OrderStatus } from "../interfaces/IOrderPopUpProps";
import { useOrderContext } from "../context/OrderContext";

export function Dashboard() {
  const { RequestOrders, orders } = useOrderContext()

  useEffect(()=>{
    RequestOrders()
  }, [])

  return (
    <div className="bg-base-100 w-full h-screen overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-neutral scrollbar-track-base-100">
      <Header />
      <div className="flex w-full h-screen py-10 items-start justify-center">
        <div className="flex gap-5 flex-wrap items-start justify-between max-lg:justify-evenly">
          <Category name={OrderStatus.WAITING} quantity={orders.filter((order)=> order.status === "WAITING").length}>
            {orders?.filter((order)=> order.status === "WAITING").map((order) => (
              <OrderDialog
                key={order._id}
                id={order._id}
                table={order.table}
                itens={order.products.length}
                status={order.status}
                products={order.products}
                observations={order.observations}/>
            ))}
          </Category>
          <Category name={OrderStatus.IN_PRODUCTION} quantity={orders.filter((order)=> order.status === "IN_PRODUCTION").length}>
            {orders?.filter((order)=> order.status === "IN_PRODUCTION").map((order) => (
              <OrderDialog
                key={order._id}
                id={order._id}
                table={order.table}
                itens={order.products.length}
                status={order.status}
                products={order.products}
                observations={order.observations}/>
            ))}
          </Category>
          <Category name={OrderStatus.DONE} quantity={orders.filter((order)=> order.status === "DONE").length}>
            {orders?.filter((order)=> order.status === "DONE").map((order) => (
              <OrderDialog
                key={order._id}
                id={order._id}
                table={order.table}
                itens={order.products.length}
                status={order.status}
                products={order.products}
                observations={order.observations}/>
            ))}
          </Category>
          <Category name={OrderStatus.CANCELED} quantity={orders.filter((order)=> order.status === "CANCELED").length}>
            {orders?.filter((order)=> order.status === "CANCELED").map((order) => (
              <OrderDialog
                key={order._id}
                id={order._id}
                table={order.table}
                itens={order.products.length}
                status={order.status}
                products={order.products}
                observations={order.observations}/>
            ))}
          </Category>
        </div>
      </div>
    </div>
  );
}
