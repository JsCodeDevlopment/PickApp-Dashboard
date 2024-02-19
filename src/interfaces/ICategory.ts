export type ICategories = {
  _id: string;
  name: string;
  icon: string;
}[];

export interface IFullCategory {
  category: { 
    _id: string; 
    name: string; 
    icon: string };
  productCount: number;
  products: {
    id: string;
    name: string;
    imagePath: string;
  }[];
}
