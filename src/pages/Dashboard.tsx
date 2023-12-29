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
          <Category name={OrderStatus.WAITING} quantity={Orders.length}>
            {Orders.map((order) => (
              <OrderPopUp
                key={order._id}
                table={order.table}
                itens={order.products.length}
                status={order.status}
                products={order.products}
                // quantity={order.products.reduce((acc, product)=> acc + product.quantity, 0)}
                // name={'sdas'}
                // value={5}
              />
            ))}
          </Category>
          <Category name={OrderStatus.IN_PRODUCTION} quantity={Orders.length}></Category>
          <Category name={OrderStatus.DONE} quantity={Orders.length}></Category>
          <Category name={OrderStatus.CANCELED} quantity={Orders.length}></Category>
        </div>
      </div>
    </div>
  );
}
