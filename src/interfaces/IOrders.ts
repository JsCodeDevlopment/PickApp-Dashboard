import { OrderStatus } from "./IOrderPopUpProps";
import { IFullUser } from "./IUser";

export interface IOrder {
  _id: string;
  table: string;
  status: keyof typeof OrderStatus;
  createdAt: string;
  products: IProduct[];
  observations: string;
  creator: IFullUser;
  __v?: number;
}

export type OrderItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  icon: string;
};

export interface IProduct {
  product: ISingleProduct
  quantity: number;
  _id: string;
}

export interface IProductState {
  _id: string;
  name: string;
  imagePath: string;
  quantity: number;
}

export interface ISingleProduct {
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
  category: ISingleCategory;
  __v?: number;
}
export interface ISingleChangeProduct {
  _id: string;
  name: string;
  description: string;
  image: File | undefined;
  price: number;
  ingredients: {
    name: string;
    icon: string;
  }[];
  categoryId: string;
}

export interface ISingleCategory {
  _id: string;
  icon: string;
  name: string;
}