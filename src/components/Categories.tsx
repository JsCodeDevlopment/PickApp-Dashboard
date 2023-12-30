import { OrderStatus } from "../interfaces/IOrderPopUpProps";
import { IOrder } from "../interfaces/IOrders";
import { Category } from "./Category";

interface ICategories {
  status: OrderStatus;
  orders: IOrder;
}

export function Categories({ status, orders }: ICategories) {
  return (
    <>
      <Category
        name={OrderStatus.WAITING}
        quantity={
          Orders.filter((order) => order.status === OrderStatus.WAITING).length
        }
      >
        {Orders.filter((order) => order.status === OrderStatus.WAITING).map(
          (order) => (
            <OrderPopUp
              key={order._id}
              table={order.table}
              itens={order.products.length}
              status={order.status}
              products={order.products}
            />
          )
        )}
      </Category>
      <Category
        name={OrderStatus.IN_PRODUCTION}
        quantity={
          Orders.filter((order) => order.status === OrderStatus.IN_PRODUCTION)
            .length
        }
      >
        {Orders.filter(
          (order) => order.status === OrderStatus.IN_PRODUCTION
        ).map((order) => (
          <OrderPopUp
            key={order._id}
            table={order.table}
            itens={order.products.length}
            status={order.status}
            products={order.products}
          />
        ))}
      </Category>
      <Category
        name={OrderStatus.DONE}
        quantity={
          Orders.filter((order) => order.status === OrderStatus.DONE).length
        }
      >
        {Orders.filter((order) => order.status === OrderStatus.DONE).map(
          (order) => (
            <OrderPopUp
              key={order._id}
              table={order.table}
              itens={order.products.length}
              status={order.status}
              products={order.products}
            />
          )
        )}
      </Category>
      <Category
        name={OrderStatus.CANCELED}
        quantity={
          Orders.filter((order) => order.status === OrderStatus.CANCELED).length
        }
      >
        {Orders.filter((order) => order.status === OrderStatus.CANCELED).map(
          (order) => (
            <OrderPopUp
              key={order._id}
              table={order.table}
              itens={order.products.length}
              status={order.status}
              products={order.products}
            />
          )
        )}
      </Category>
    </>
  );
}
