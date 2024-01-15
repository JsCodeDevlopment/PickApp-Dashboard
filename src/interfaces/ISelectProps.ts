import { IProduct } from "./IOrders";

export interface ISelectProps {
  title: string;
  options?: IProduct[] | Object[] | undefined
}

export type ITables = {
  id: string;
  name: string;
}[];
