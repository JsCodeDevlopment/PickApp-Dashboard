import { Category } from "../components/Category";
import { Header } from "../components/Header";
import { OrderPopUp } from "../components/OrderPopUp";
import { MockOrders } from "../data/MockOrders";
import { OrderStatus } from "../interfaces/IOrderPopUpProps";

export function Dashboard() {
  const { Orders } = MockOrders();
  console.log(Orders);

  return (
    <div className="bg-base-100 w-full h-screen overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-neutral scrollbar-track-base-100">
      <Header />
      <div className="flex w-full h-screen py-10 items-start justify-center">
        <div className="flex gap-5 flex-wrap items-start justify-between max-lg:justify-evenly">
          <Category name={OrderStatus.WAITING} quantity={Orders.filter((order)=> order.status === OrderStatus.WAITING).length}>
            {Orders.filter((order)=> order.status === OrderStatus.WAITING).map((order) => (
              <OrderPopUp
                key={order._id}
                table={order.table}
                itens={order.products.length}
                status={order.status}
                products={order.products}
              />
            ))}
          </Category>
          <Category name={OrderStatus.IN_PRODUCTION} quantity={Orders.filter((order)=> order.status === OrderStatus.IN_PRODUCTION).length}>
            {Orders.filter((order)=> order.status === OrderStatus.IN_PRODUCTION).map((order) => (
              <OrderPopUp
                key={order._id}
                table={order.table}
                itens={order.products.length}
                status={order.status}
                products={order.products}
              />
            ))}
          </Category>
          <Category name={OrderStatus.DONE} quantity={Orders.filter((order)=> order.status === OrderStatus.DONE).length}>
            {Orders.filter((order)=> order.status === OrderStatus.DONE).map((order) => (
              <OrderPopUp
                key={order._id}
                table={order.table}
                itens={order.products.length}
                status={order.status}
                products={order.products}
              />
            ))}
          </Category>
          <Category name={OrderStatus.CANCELED} quantity={Orders.filter((order)=> order.status === OrderStatus.CANCELED).length}>
            {Orders.filter((order)=> order.status === OrderStatus.CANCELED).map((order) => (
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
