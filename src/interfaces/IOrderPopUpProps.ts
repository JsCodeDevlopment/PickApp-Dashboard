import { IProduct } from "./IOrders";

export interface IOrderPopUpProps {
  table: string;
  itens: number;
  status: OrderStatus
  products: IProduct[];
}

export enum OrderStatus {
  WAITING = "⏱ Fila de Espera",
  IN_PRODUCTION = "👨‍🍳 Em produção",
  DONE = "✔ Pronto!",
  CANCELED = "❌ Cancelados",
}
