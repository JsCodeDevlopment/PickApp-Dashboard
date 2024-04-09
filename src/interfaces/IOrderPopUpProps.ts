import { IProduct } from "./IOrders";
import { IFullUser } from "./IUser";

export interface IOrderPopUpProps {
  id: string
  table: string;
  itens: number;
  status: keyof typeof OrderStatus
  products: IProduct[];
  observations?: string;
  createdAt: string;
  creator: IFullUser;
  isToday: boolean;
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