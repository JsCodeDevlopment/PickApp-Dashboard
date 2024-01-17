import { Order } from "../pages/NewOrder";
import { IProduct, ISingleProduct } from "./IOrders";
import { ISelectProps } from "./ISelectProps";

export interface ICreateOrderProps {
  table: string;
  orders: Order[];
  quantity: number;
}
