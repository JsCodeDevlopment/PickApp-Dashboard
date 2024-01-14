import { IProduct } from "./IOrders";

export interface ICreateOrderProps {
  table: string;
  products: IProduct[];
  quantity: number;
}
