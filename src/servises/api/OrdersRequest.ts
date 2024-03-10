import { baseURL } from "../BackEndBaseURL";
import { toast } from "react-toastify";
import { IChangeOrderStatusProps } from "../../interfaces/IChangeOrderStatusProps";

export function useOrder() {

  const CreateOrder = async ( table: string, products: { product: string; quantity: number }[], observations: string ) => {

    try {
      const response = await fetch(`${baseURL}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          table,
          products,
          observations
        }),
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

  const ChangeOrderStatus = async ({ id, status }: IChangeOrderStatusProps) => {
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

  const ChangeOrderObservation = async ({ id, observations }: { id: string; observations: string }) => {
    try {
      const response = await fetch(`${baseURL}/orders/observations/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          observations,
        }),
      });

      if (response.ok) {
        toast.success("Observações alteradas com sucesso!", {
          autoClose: 1000 * 3,
        });
      } else {
        toast.error(`Erro ao alterar as observações do pedido.`, {
          autoClose: 1000 * 3,
        });
      }
    } catch (error) {
      console.error(
        error,
        "Erro ao requisitar a alteração das observações do pedido."
      );
      toast.error(
        `${error} Erro ao requisitar a alteração das observações do pedido.`,
        {
          autoClose: 1000 * 3,
        }
      );
    }
  }

  const DeleteOrder = async ({ id }: Omit<IChangeOrderStatusProps, "status">) => {
    try {
      const response = await fetch(`${baseURL}/orders/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (response.ok) {
        toast.success("Pedido excluido com sucesso!", {
          autoClose: 1000 * 3,
        });
      } else {
        toast.error(`Erro ao excluir o pedido.`, {
          autoClose: 1000 * 3,
        });
      }
    } catch (error) {
      console.error(
        error,
        "Erro ao requisitar a exclusão do pedido."
      );
      toast.error(
        `${error} Erro ao requisitar a exclusão do pedido.`,
        {
          autoClose: 1000 * 3,
        }
      );
    }
  };

  return { CreateOrder, ChangeOrderStatus, DeleteOrder, ChangeOrdersObservations: ChangeOrderObservation };
}
