import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { IOrder, ISingleProduct } from "../interfaces/IOrders";
import { baseURL } from "../servises/BackEndBaseURL";
import { IOrderContext, IOrdersReport } from "../interfaces/IOrderContext";
import { ITables } from "../interfaces/ITables";

export const OrderContext = createContext({} as IOrderContext);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [ordersReport, setOrdersReport] = useState<IOrdersReport[]>([]);
  const [products, setProducts] = useState<ISingleProduct[]>([]);
  const [tables, setTables] = useState<ITables[]>([]);

  const RequestOrders = async () => {
    try {
      const response = await fetch(`${baseURL}/orders`);
      const data = await response.json();

      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const RequestOrdersReport = async (initialDate?: string, finalDate?: string) => {
    const curretDate = new Date();
    const firstDate = !initialDate ? new Date(curretDate.getFullYear(), curretDate.getMonth(), 1) : initialDate;
    const secondDate = !finalDate ? curretDate : finalDate;
    try {
      const response = await fetch(`${baseURL}/orders/report?startDate=${firstDate}&finalDate=${secondDate}`);
      const data = await response.json() as IOrdersReport[];

      setOrdersReport(data);
      return data;
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const RequestProducts = async () => {
    try {
      const response = await fetch(`${baseURL}/products`);
      const data = await response.json();

      setProducts(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const RequestTables = async () => {
    try {
      const response = await fetch(`${baseURL}/table`);
      const data = await response.json();
      setTables(data);
    } catch (error) {
      console.error("Error fetching tables:", error);
    }
  };

  useEffect(() => {
    RequestOrders();
    RequestProducts();
    RequestTables();
  }, []);

  return (
    <OrderContext.Provider
      value={{ RequestOrders, orders, RequestProducts, products, RequestTables, tables, RequestOrdersReport, ordersReport }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => useContext(OrderContext);
