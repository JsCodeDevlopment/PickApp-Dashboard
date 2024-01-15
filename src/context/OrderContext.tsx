import { ReactNode, createContext, useContext, useState } from "react";
import { IOrder, IProduct } from "../interfaces/IOrders";
import { baseURL } from "../servises/BackEndBaseURL";
import { IOrderContext } from "../interfaces/IOrderContext";

export const OrderContext = createContext({} as IOrderContext);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);

  const useRequestOrders = async () => {
    try {
      const response = await fetch(`${baseURL}/orders`);
      const data = await response.json();

      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const useRequestProducts = async () => {
    try {
      const response = await fetch(`${baseURL}/products`);
      const data = await response.json();   
         
      setProducts(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  return (
    <OrderContext.Provider value={{ useRequestOrders, orders, useRequestProducts, products }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => useContext(OrderContext);
