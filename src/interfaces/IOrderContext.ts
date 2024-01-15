import { IOrder, IProduct } from "./IOrders";

export interface IOrderContext {
  orders: IOrder[];
  useRequestOrders: () => Promise<void>;
  useRequestProducts: () => Promise<void>;
  products: IProduct[]
}
