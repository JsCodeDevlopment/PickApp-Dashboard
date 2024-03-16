import { ISingleProduct } from "./IOrders";

export interface ISelectProps {
  title: string;
  options: ISingleProduct[]
  onSelectChange: (selectedOption: ISingleProduct) => void;
}
