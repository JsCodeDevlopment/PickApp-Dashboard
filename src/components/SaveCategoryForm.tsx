import { Dispatch, SetStateAction, useState } from "react";
import { useCategory } from "../servises/api/CategoryRequest";
import { ISingleCategory } from "../interfaces/IOrders";

interface ISaveCategoryFormProps {
  setIsClosed: Dispatch<SetStateAction<boolean>>;
  category?: ISingleCategory 
}

export function SaveCategoryForm({ setIsClosed, category }: ISaveCategoryFormProps) {
  const [categoryIcon, setCategoryIcon] = useState<string>(category?.icon || "");
  const [categoryName, setCategoryName] = useState<string>(category?.name || "");

  const { CreateCategory } = useCategory();

  const handleSubmit = async () => {
    setIsClosed(true)
    if (category) {
      // update here function
    } else {
      await CreateCategory(categoryIcon, categoryName);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 p-2 rounded-md bg-base-300 shadow-lg">
      <h1 className="text-lg font-semibold">{category ? `Editar categoria ${category.name}` : "Criar Categoria"}</h1>
      <div className="flex w-full items-center justify-center max-lg:flex-wrap max-md:flex-nowrap max-sm:flex-wrap">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Ícone da categoria</span>
          </div>
          <input
            value={categoryIcon}
            onChange={(e) => setCategoryIcon(e.target.value)}
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
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Ex.: Refrigerantes"
            className="input input-bordered w-full max-w-xs"/>
        </label>
      </div>
      <button className="btn w-full btn-neutral" onClick={handleSubmit}>
        Salvar
      </button>
    </div>
  );
}
