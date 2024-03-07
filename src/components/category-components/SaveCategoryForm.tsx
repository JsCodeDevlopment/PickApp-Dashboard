import { Dispatch, SetStateAction, useState } from "react";
import { useCategory } from "../../servises/api/CategoryRequest";
import { ISingleCategory } from "../../interfaces/IOrders";
import Wind from '../../assets/images/WindowsLogo.png'

interface ISaveCategoryFormProps {
  setIsClosed: Dispatch<SetStateAction<boolean>>;
  category?: ISingleCategory
  getCategories: () => Promise<void>
}

export function SaveCategoryForm({ setIsClosed, category, getCategories }: ISaveCategoryFormProps) {
  const [categoryIcon, setCategoryIcon] = useState<string>(category?.icon || "");
  const [categoryName, setCategoryName] = useState<string>(category?.name || "");

  const { CreateCategory, ChangeCategory } = useCategory();

  const handleSubmit = async () => {
    if (category) {
      const changeCategory = {
        id: category._id,
        icon: categoryIcon,
        name: categoryName
      }
      await ChangeCategory(changeCategory)
      getCategories()
    } else {
      if (categoryIcon === "" || categoryName === "") {
        return
      }
      await CreateCategory(categoryIcon, categoryName);
      getCategories()
    }
    setIsClosed(true)
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 p-2 rounded-md bg-base-300 shadow-lg">
      <h1 className="text-lg font-semibold text-base-content">{category ? `Editar Categoria ${category.name}` : "Criar Categoria"}</h1>
      <p className="flex items-center justify-center text-base-content">Tecle<kbd className="kbd"><img src={Wind} alt="" /></kbd> + <kbd className="kbd">.</kbd> Para adicionar um ícone.</p>
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
