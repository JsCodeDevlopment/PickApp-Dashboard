import { ReactNode, createContext, useContext, useState } from "react";
import { IOrder } from "../interfaces/IOrders";
import { baseURL } from "../servises/BackEndBaseURL";

interface IOrderContext {
  orders: IOrder[]
  useRequestOrders: () => Promise<void>
}

export const OrderContext = createContext({} as IOrderContext);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<IOrder[]>([]);

  const useRequestOrders = async () => {
    try {
      const response = await fetch(`${baseURL}/orders`);
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
  return (
    <OrderContext.Provider value={{ useRequestOrders, orders }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => useContext(OrderContext);
