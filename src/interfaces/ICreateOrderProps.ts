import { OrderItem } from "./IOrders";

export interface ICreateOrderProps {
  table: string;
  orders: OrderItem[];
  quantity: number;
}
