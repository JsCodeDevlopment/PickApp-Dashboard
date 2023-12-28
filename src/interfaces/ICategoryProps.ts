import { IOrders } from "./IOrders";

export interface ICategoryProps {
    Props: IOrders[]
    table?: string
    itens?: string
    category?: 'WAITING' | 'IN_PRODUCTION' | 'DONE' | 'CANCELED'
}
