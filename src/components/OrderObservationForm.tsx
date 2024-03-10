import { Dispatch, FormEvent, SetStateAction } from "react";
import { useOrder } from "../servises/api/OrdersRequest";

interface IObservationsFormProps {
  observation: string;
  setObservations: Dispatch<SetStateAction<string>>;
  orderId: string;
  setIsClosed: Dispatch<SetStateAction<boolean>>;
  requestOrders: ()=> void;
}

export function ChangeOrderObservationsFomr({ observation, setObservations, orderId, setIsClosed, requestOrders }: IObservationsFormProps) {
  const { ChangeOrdersObservations } = useOrder();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    await ChangeOrdersObservations({ id: orderId, observations: observation });
    requestOrders()
    setIsClosed(true);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-ful flex-col gap-3">
      <textarea
        value={observation}
        onChange={(e) => setObservations(e.target.value)}
        className="textarea textarea-bordered w-full"
        placeholder="Observações"/>
      {observation && (
        <button type="submit" className="btn btn-primary">
          Editar
        </button>
      )}
    </form>
  );
}
