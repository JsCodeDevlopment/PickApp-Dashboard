import { ISelectProps } from "../interfaces/ISelectProps";

export function Select({ title, options, onSelectChange }: ISelectProps) {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.target.selectedIndex;    
    const selectedOption = options[selectedIndex];
    onSelectChange(selectedOption);
  };

  return (
    <select onChange={handleSelectChange} className="select select-bordered w-full max-w-xs">
      <option disabled selected>
        {title}
      </option>
      {options && options.map((option) => <option key={option._id} value={option._id}>{title}: {option.name}</option>)}
    </select>
  );
}
