import { IOrder, ISingleProduct } from "./IOrders";
import { ITables } from "./ITables";

export interface IOrderContext {
  orders: IOrder[];
  tables: ITables[];
  RequestOrders: () => Promise<void>;
  RequestOrdersReport: (initialDate?: string, finalDate?: string) => Promise<IOrdersReport[] | undefined>
  RequestProducts: () => Promise<void>;
  RequestTables: () => Promise<void>;
  products: ISingleProduct[];
  ordersReport: IOrdersReport[];
}

export interface IOrdersReport {
  productId: string;
  name: string;
  productName: ISingleProduct;
  quantityCanceled: number;
  quantityDone: number;
  quantityTotal: number;
}