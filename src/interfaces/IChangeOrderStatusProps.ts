import { OrderStatus } from "./IOrderPopUpProps";

export interface IChangeOrderStatusProps {
  id: string;
  status: keyof typeof OrderStatus;
}
