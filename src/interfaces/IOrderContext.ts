import { IOrder, ISingleProduct } from "./IOrders";

export interface IOrderContext {
  orders: IOrder[];
  RequestOrders: () => Promise<void>;
  RequestProducts: () => Promise<void>;
  products: ISingleProduct[]
}
