import { IOrder, ISingleProduct } from "./IOrders";
import { ITables } from "./ITables";

export interface IOrderContext {
  orders: IOrder[];
  tables: ITables[];
  RequestOrders: () => Promise<void>;
  RequestOrdersReport: (initialDate: Date, finalDate: Date) => Promise<void>;
  RequestProducts: () => Promise<void>;
  RequestTables: () => Promise<void>;
  products: ISingleProduct[];
  ordersReport: any;
}
