import { Dispatch, FormEvent, SetStateAction } from "react";
import { useOrder } from "../servises/api/OrdersRequest";

interface IObservationsFormProps {
  observations?: string | undefined;
  setObservations: Dispatch<SetStateAction<string | undefined>>;
  orderId?: string;
  setIsClosed?: Dispatch<SetStateAction<boolean>>;
  requestOrders?: () => void;
}

export function OrderObservationsFomr({ observations, setObservations, orderId, setIsClosed, requestOrders }: IObservationsFormProps) {
  const { ChangeOrdersObservations } = useOrder();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (orderId && observations) {
      const id = orderId;
      const obs = observations;
      await ChangeOrdersObservations({ id, observations: obs });
      requestOrders && requestOrders();
      setIsClosed && setIsClosed(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-ful flex-col gap-3">
      <textarea
        value={observations}
        onChange={(e) => setObservations(e.target.value)}
        className="textarea textarea-bordered w-full text-base-content placeholder:text-base-content/65"
        placeholder="Observações:"/>
      {orderId && (
        <button type="submit" className="btn btn-primary">
          Editar
        </button>
      )}
    </form>
  );
}
