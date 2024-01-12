import Select from "react-select";

const options = [
  { value: 40, label: "Pizza 4 queijos" },
  { value: 12, label: "X-TUDO" },
  { value: 22, label: "A MODA DA CASA" },
];

export function ProductSelect(textHolder: string) {
  return (
    <>
      <Select options={options} isClearable={true} className="text-black" placeholder={textHolder}/>
    </>
  );
}
