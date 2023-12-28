export interface IOrders {
  _id: string;
  table: string;
  status: 'WAITING' | 'IN_PRODUCTION' | 'DONE' | 'CANCELED'
  createdAt: string;
  products: {
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
  }[];
  __v?: number;
}
