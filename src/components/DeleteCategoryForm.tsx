import { useEffect, useState } from "react";
import Trash from "../assets/images/Trash.png";
import { useCategory } from "../servises/api/CategoryRequest";
import { ICategories } from "../pages/NewItems";

export function DeleteCategoryForm() {
  const [categories, setCategories] = useState<ICategories>([{ _id: "", name: "", icon: "" },]);

  const { ShowCategories } = useCategory();

  useEffect(() => {
    const getCategories = async () => {
      const allCategories = await ShowCategories();
      allCategories && setCategories(allCategories);
    };
    getCategories();
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 p-2 rounded-md bg-base-300 shadow-lg">
      <h1 className="text-lg font-semibold">Deletar Categoria</h1>

      <label className="flex gap-2 text-base font-medium">
        Categorias:
        <input list="categories" className="input input-xs" />
      </label>
      <datalist id="categories">
        {categories &&
          categories.map((category) => (
            <option key={category._id} value={category.name}>
              {category.name}
            </option>
          ))}
      </datalist>

      {categories &&
        categories.map((category) => (
          <div key={category._id} className="flex w-full p-2 gap-5 items-center justify-between rounded-md bg-base-200 shadow-md ">
            <div className="flex gap-5 max-sm:w-full max-sm:gap-2">
              <p className="text-xl font-semibold">{category.icon}</p>
              <div className="flex gap-1">
                <p className="text-xl font-semibold">{category.name}</p>
              </div>
            </div>
            <div className="flex items-center justify-center cursor-pointer">
              <img className="w-5 h-5" src={Trash} alt="" />
            </div>
          </div>
        ))}
    </div>
  );
}
