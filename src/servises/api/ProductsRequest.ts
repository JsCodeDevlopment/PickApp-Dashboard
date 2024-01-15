import { toast } from "react-toastify";
import { baseURL } from "../BackEndBaseURL";

export function useProducts () {
    const CreateOrder = async () => {
        try {
          const response = await fetch(`${baseURL}/products`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (response.ok) {
            toast.success("Pedido Criado com sucesso", {
              autoClose: 1000 * 3,
            });
          } else {
            toast.error(`Erro ao criar pedido.`, {
              autoClose: 1000 * 3,
            });
          }
        } catch (error) {
          console.error("Error create order", error)
          toast.error(`Erro na requisição de criação do pedido.`, {
            autoClose: 1000 * 3,
          });
        }
      }
    return {}
}