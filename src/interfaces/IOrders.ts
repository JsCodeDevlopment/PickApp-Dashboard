import { OrderStatus } from "./IOrderPopUpProps";

export interface IOrder {
  _id: string;
  table: string;
  status: keyof typeof OrderStatus
  createdAt: string;
  products: IProduct[];
  __v?: number;
}

export interface IProduct {
  product: {
    _id: string;
    name: string;
    description: string;
    imagePath: string;
    price: number;
    ingredients: {
      name: string;
      icon: string;
      _id: string;
    }[];
    category: string;
    __v?: number;
  };
  quantity: number;
  _id: string;
}
