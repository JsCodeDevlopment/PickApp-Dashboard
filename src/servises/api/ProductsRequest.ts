import { toast } from "react-toastify";
import { baseURL } from "../BackEndBaseURL";
import { ISingleProduct } from "../../interfaces/IOrders";

export interface IProductProps {
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

export function useProduct() {
  const CreateProduct = async ({ name, description, image, price, category, ingredients }: IProductProps): Promise<ISingleProduct | undefined> => {
    try {
      const formData = new FormData()

      formData.append("name", name);
      formData.append("description", description);
      formData.append("image", image);
      formData.append("price", price.toString());
      formData.append("category", category);
      formData.append("ingredients", JSON.stringify(ingredients));

      const response = await fetch(`${baseURL}/products`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json()

      if (response.ok) {
        toast.success("Produto criado com sucesso!", {
          autoClose: 1000 * 3,
        });
        return data
      } else {
        toast.error(`Erro ao criar Produto.`, {
          autoClose: 1000 * 3,
        });
      }
    } catch (error) {
      console.error(error, "Erro ao criar produto.");
      toast.error(`${error} Erro ao criar produto.`, {
        autoClose: 1000 * 3,
      });
    }
  };

  const ShowProductsByCategory = async (categoryId: string) => {
    try {
      const response = await fetch(`${baseURL}/products/${categoryId}/products`, {
        method: "GET",
      });
      const data = await response.json()

      return data
    } catch (error) {
      console.error(error, "Erro ao buscar por categortias.");
    }
  }

  return { CreateProduct, ShowProductsByCategory };
}
