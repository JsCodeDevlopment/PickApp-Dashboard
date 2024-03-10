import { baseURL } from "../servises/BackEndBaseURL";
import Trash from "../assets/images/Trash.png";
import { QuantityButton } from "./QuantityButton";
import { useCart } from "../context/CartContext";
import { OrderItem } from "../interfaces/IOrders";

interface IOrderItemProps {
  order: OrderItem;
}

export function OrderItem({ order }: IOrderItemProps) {
  const { incrementItem, decrementItem, removeOrder } = useCart();

  return (
    <div className="flex w-full p-2 gap-5 items-center justify-around rounded-md bg-base-300 shadow-md max-lg:flex-col max-md:flex-row max-sm:flex-col">
      <div className="flex gap-5 max-sm:flex-wrap max-sm:w-full max-sm:items-center max-sm:flex-col max-sm:gap-2">
        <img
          className="w-20 h-16 rounded-md object-cover max-sm:w-full max-sm:h-36"
          src={`${baseURL}/uploads/${order.icon}`}
          alt=""/>
        <p className="text-sm font-light">x{order.quantity}</p>
        <div className="flex flex-col gap-1">
          <p className="text-base font-semibold">{order.name}</p>
          <p className="text-sm font-light">
            {order.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
      </div>
      <div className="flex flex-1 w-20 items-center justify-end">
        <div className="flex">
          <QuantityButton
            incrementItem={() => incrementItem(order._id)}
            decrementItem={() => decrementItem(order._id)}/>
        </div>
      </div>
      <div
        onClick={() => removeOrder(order._id)}
        className="flex items-center justify-center cursor-pointer">
        <img className="w-5 h-5" src={Trash} alt="" />
      </div>
    </div>
  );
}
