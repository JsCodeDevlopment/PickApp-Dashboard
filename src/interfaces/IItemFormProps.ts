import { Dispatch, SetStateAction } from "react";
import { ISingleProduct } from "./IOrders";

export interface IItemFormProps {
  onProductSubmit: (product: ISingleProduct) => void;
  setIsClosed: Dispatch<SetStateAction<boolean>>;
  useRequestProducts: () => Promise<void>;
  product?: ISingleProduct | undefined
}
