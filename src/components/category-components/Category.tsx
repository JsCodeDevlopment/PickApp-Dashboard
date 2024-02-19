import { ICategoryProps } from "../../interfaces/ICategoryProps";

export function Category({ name, quantity, children }: ICategoryProps) {
  return (
    <div className="flex flex-col p-3 gap-3 w-64 h-full bg-neutral rounded-md">
      <div className="flex w-full items-center justify-center gap-2">
        <h1 className="text-white">{name}</h1>
        <p className="text-white">({quantity})</p>
      </div>
      {children}
    </div>
  );
}
