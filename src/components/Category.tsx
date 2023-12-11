import { ICategoryProps } from "../interfaces/ICateroryProps";
import { OrderPopUp } from "./OrderPopUp";

export function Category({category, quantity}: ICategoryProps) {
  return (
    <div className="flex flex-col p-3 gap-3 w-64 h-full bg-neutral rounded-md">
      <div className="flex w-full items-center justify-center gap-2">
        <h1>{category}</h1>
        <p>{`(${quantity})`}</p>
      </div>
        <OrderPopUp table="Mesa 2" itens="5 itens" />
        <OrderPopUp table="Mesa 2" itens="5 itens" />
        <OrderPopUp table="Mesa 2" itens="5 itens" />
    </div>
  );
}
