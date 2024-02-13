import { Dispatch, SetStateAction, useState } from "react";
import { useCategory } from "../servises/api/CategoryRequest";

interface ICategoryFormProps {
  setIsClosed: Dispatch<SetStateAction<boolean>>;
}

export function NewCategoryForm({ setIsClosed }: ICategoryFormProps) {
  const [icon, setIcon] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const { CreateCategory } = useCategory();

  const handleSubmit = async () => {
    setIsClosed(true)
    await CreateCategory(icon, category);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 p-2 rounded-md bg-base-300 shadow-lg">
      <h1 className="text-lg font-semibold">Criar Categoria</h1>
      <div className="flex w-full items-center justify-center max-lg:flex-wrap max-md:flex-nowrap max-sm:flex-wrap">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Ícone da categoria</span>
          </div>
          <input
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
            type="text"
            placeholder="Ex.: 🥤"
            className="input input-bordered w-2/3 max-w-xs max-lg:w-full max-md:w-2/3 max-sm:w-full"/>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Name da categoria</span>
          </div>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Ex.: Refrigerantes"
            className="input input-bordered w-full max-w-xs"/>
        </label>
      </div>
      <button className="btn w-full btn-neutral" onClick={handleSubmit}>
        Criar
      </button>
    </div>
  );
}
