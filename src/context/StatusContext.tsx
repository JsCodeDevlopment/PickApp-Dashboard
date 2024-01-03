import { ReactNode, createContext, useContext } from "react";
import { baseURL } from "../servises/BaseURL";
import { IChangeOrderStatusProps } from "../interfaces/IChangeOrderStatusProps";
import { toast } from "react-toastify";

export const StatusContext = createContext({} as any);

export const StatusProvider = ({ children }: { children: ReactNode }) => {
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
  return (
    <StatusContext.Provider value={{ changeOrderStatus }}>
      {children}
    </StatusContext.Provider>
  );
};

export const useStatusOrder = () => useContext(StatusContext)
