import { IOrder, IProduct, ISingleProduct } from "./IOrders";

export interface IOrderContext {
  orders: IOrder[];
  useRequestOrders: () => Promise<void>;
  useRequestProducts: () => Promise<void>;
  products: ISingleProduct[]
}
