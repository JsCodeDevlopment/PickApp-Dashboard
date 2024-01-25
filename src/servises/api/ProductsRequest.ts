import { toast } from "react-toastify";
import { baseURL } from "../BackEndBaseURL";

export interface IProductProps {
  name: string;
  description: string;
  image: string;
  price: string;
  ingredients: string
  category: string;
}

export function useProduct() {
  const CreateProduct = async ({ name, description, image, price, category, ingredients }: IProductProps): Promise<void> => {
    
    try {
      const formData = new FormData()

      formData.append("name", name);
      formData.append("description", description);
      formData.append("image", image);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("ingredients", JSON.stringify(ingredients));

      const response = await fetch(`${baseURL}/products`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Produto criado com sucesso!", {
          autoClose: 1000 * 3,
        });
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

  return { CreateProduct };
}
