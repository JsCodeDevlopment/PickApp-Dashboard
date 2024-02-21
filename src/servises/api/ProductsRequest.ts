import { toast } from "react-toastify";
import { baseURL } from "../BackEndBaseURL";
import { ISingleChangeProduct, ISingleProduct } from "../../interfaces/IOrders";
import { ICreateProductProps } from "../../interfaces/IProductProps";

export function useProduct() {
  const CreateProduct = async ({ name, description, image, price, category, ingredients }: ICreateProductProps): Promise<ISingleProduct | undefined> => {
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
  
  const ChangeProduct = async ({ name, description, image, price, categoryId, ingredients, _id }: ISingleChangeProduct): Promise<ISingleProduct | undefined> => {
    try {
      const formData = new FormData()

      formData.append("name", name);
      formData.append("description", description);
      if(image)formData.append("image", image)
      formData.append("price", price.toString());
      formData.append("category", categoryId);
      formData.append("ingredients", JSON.stringify(ingredients));

      const response = await fetch(`${baseURL}/products/${_id}`, {
        method: "PATCH",
        body: formData,
      });
      const data = await response.json()

      if (response.ok) {
        toast.success("Produto alterado com sucesso!", {
          autoClose: 1000 * 3,
        });
        return data
      } else {
        toast.error(`Erro ao alterar Produto.`, {
          autoClose: 1000 * 3,
        });
      }
    } catch (error) {
      console.error(error, "Erro ao alterar produto.");
      toast.error(`${error} Erro ao alterar produto.`, {
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

  const DeleteProduct = async (productId: string) => {
    try {
      const response = await fetch(`${baseURL}/products/${productId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      })
      if (response.ok) {
        toast.success("Produto excluido com sucesso!", {
          autoClose: 1000 * 3,
        });
      } else {
        toast.error(`Erro ao excluir o produto.`, {
          autoClose: 1000 * 3,
        });
      }
    } catch (error) {
      console.error(error, "Erro ao requisitar a deletação do produto.")
    }
  }

  return { CreateProduct, ShowProductsByCategory, DeleteProduct, ChangeProduct };
}
