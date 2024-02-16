import { toast } from "react-toastify";
import { ISingleCategory } from "../../interfaces/IOrders";
import { ICategories } from "../../pages/NewItems";
import { baseURL } from "../BackEndBaseURL";
import { IChangeCategoryProps } from "../../interfaces/IChangeCategoryProps";

export function useCategory() {
  const ShowCategories = async (): Promise<ICategories | undefined> => {
    try {
      const response = await fetch(`${baseURL}/categories`, {
        method: "GET",
      });
      const data: ICategories = await response.json();

      return data;
    } catch (error) {
      console.error(error, "Erro ao buscar categortias.");
    }
  };

  const CreateCategory = async ( icon: string, name: string ): Promise<ISingleCategory | undefined> => {
    try {
      const response = await fetch(`${baseURL}/categories`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          icon,
          name,
        }),
      });

      if (response.ok) {
        toast.success("Categoria criada com sucesso!", {
          autoClose: 1000 * 3,
        });
      } else {
        toast.error(`Me parece que algo deu errado!`, {
          autoClose: 1000 * 3,
        });
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error, "Erro ao criar uma categoria.");
    }
  };

  const ChangeCategory = async ({ id, icon, name }: IChangeCategoryProps): Promise<void> => {    
    try {
      const response = await fetch(`${baseURL}/categories/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          icon,
          name,
        }),
      });

      if (response.ok) {
        toast.success("Alteração feita com sucesso!", {
          autoClose: 1000 * 3,
        });
      } else {
        toast.error(`Me parece que algo deu errado!`, {
          autoClose: 1000 * 3,
        });
      }
    } catch (error) {
      console.error(error, "Erro ao requisitar a alteração da categoria.");
      toast.error(
        `${error} Erro ao requisitar a alteração do estatus da categoria.`,
        {
          autoClose: 1000 * 3,
        }
      );
    }
  };

  const DeleteCategory = async (id: string): Promise<void> => {
    try {
      const response = await fetch(`${baseURL}/categories/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        toast.success("Categoria excluida com sucesso!", {
          autoClose: 1000 * 3,
        });
      } else {
        toast.error(`Erro ao excluir a categoria.`, {
          autoClose: 1000 * 3,
        });
      }
    } catch (error) {
      console.error(error, "Erro ao deletar sua categoria.");
    }
  };

  return { ShowCategories, CreateCategory, DeleteCategory, ChangeCategory };
}
