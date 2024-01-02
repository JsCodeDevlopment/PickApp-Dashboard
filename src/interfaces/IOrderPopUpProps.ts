import { IProduct } from "./IOrders";

export interface IOrderPopUpProps {
  table: string;
  itens: number;
  status: keyof typeof OrderStatus
  products: IProduct[];
}

export enum OrderStatus {
  WAITING = "⏱ Fila de Espera",
  IN_PRODUCTION = "👨‍🍳 Em produção",
  DONE = "✔ Pronto!",
  CANCELED = "❌ Cancelados",
}

export enum BtnOrderStatus {
  WAITING = "👨‍🍳 Iniciar Produção",
  IN_PRODUCTION = "✔ Concluir Pedido",
  DONE = "",
  CANCELED = "❌ Excluir Pedido",
}