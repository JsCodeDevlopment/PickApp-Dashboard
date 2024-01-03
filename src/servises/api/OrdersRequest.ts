import { baseURL } from "../BaseURL";
import { toast } from "react-toastify";
import { IChangeOrderStatusProps } from "../../interfaces/IChangeOrderStatusProps";

export function useChangeOrderStatus() {
  const changeOrderStatus = async ({ id, status }: IChangeOrderStatusProps) => {
    try {
      const response = await fetch(`${baseURL}/orders/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status,
        }),
      });

      if (response.ok) {
        toast.success("Satus alterado com sucesso!", {
          autoClose: 1000 * 3,
        });
      } else {
        toast.error(`Erro ao alterar o estatus do pedido.`, {
          autoClose: 1000 * 3,
        });
      }
    } catch (error) {
      console.error(
        error,
        "Erro ao requisitar a alteração do estatus do pedido."
      );
      toast.error(
        `${error} Erro ao requisitar a alteração do estatus do pedido.`,
        {
          autoClose: 1000 * 3,
        }
      );
    }
  };

  return { changeOrderStatus };
}
