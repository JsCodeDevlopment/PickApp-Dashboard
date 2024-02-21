export interface ICreateProductProps {
    name: string;
    description: string;
    image: File;
    price: number;
    ingredients: {
      icon: string;
      name: string;
  }[]
    category: string;
  }