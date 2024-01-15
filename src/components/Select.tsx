import { ISelectProps } from "../interfaces/ISelectProps";

export function Select({ title, options }: ISelectProps) {
  return (
    <select className="select select-bordered w-full max-w-xs">
      <option disabled selected>
        {title}
      </option>
      {options && options.map((option) => <option key={option.id}>{title}: {option.name}</option>)}
    </select>
  );
}
