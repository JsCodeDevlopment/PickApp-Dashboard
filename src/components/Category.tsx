import { ICategoryProps } from "../interfaces/ICateroryProps";

export function Category({category, table, itens, quantity}: ICategoryProps) {
  return (
    <div className="flex flex-col p-3 gap-3 w-64 h-40 bg-neutral rounded-md">
      <div className="flex w-full items-center justify-center gap-2">
        <h1>{category}</h1>
        <p>{`(${quantity})`}</p>
      </div>
      <div className="flex flex-col w-full h-24 rounded-sm bg-base-100 items-center justify-center">
        <h1>{table}</h1>
        <p>{itens}</p>
      </div>
    </div>
  );
}
