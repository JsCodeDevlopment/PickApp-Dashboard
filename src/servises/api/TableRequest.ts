import { toast } from "react-toastify";
import { baseURL } from "../BackEndBaseURL";
import { useLogin } from "../../context/LoginContext";

export function useTable() {
  const { logedUserToken } = useLogin();

  const CreateTable = async (tableNumber: string) => {
    try {
      const response = await fetch(`${baseURL}/table`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${logedUserToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tableNumber,
        }),
      });
      if (response.ok) {
        toast.success("Mesa Criada com sucesso", {
          autoClose: 1000 * 3,
        });
      } else {
        toast.error(`Erro ao criar mesa.`, {
          autoClose: 1000 * 3,
        });
      }
    } catch (error) {
      console.error("Error create table", error);
      toast.error(`Erro na requisição de criação da mesa.`, {
        autoClose: 1000 * 3,
      });
    }
  };

  const DeleteTable = async (id: string) => {
    try {
      const response = await fetch(`${baseURL}/table/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${logedUserToken}`,
        },
      });
      if (response.ok) {
        toast.success("Mesa deletada com sucesso", {
          autoClose: 1000 * 3,
        });
      } else {
        toast.error(`Erro ao deletar mesa.`, {
          autoClose: 1000 * 3,
        });
      }
    } catch (error) {
      console.error("Error delete table", error);
      toast.error(`Erro na requisição de deleção da mesa.`, {
        autoClose: 1000 * 3,
      });
    }
  }

  return { CreateTable, DeleteTable };
}
