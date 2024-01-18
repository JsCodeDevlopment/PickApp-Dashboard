import { Order } from "../pages/NewOrder";

export interface ICreateOrderProps {
  table: string;
  orders: Order[];
  quantity: number;
}
