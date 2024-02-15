import { useEffect, useState } from "react";
import { useCategory } from "../servises/api/CategoryRequest";
import { ICategories } from "../pages/NewItems";
import Trash from "../assets/images/Trash.png";
import Edit from "../assets/images/edit.png";
import { NewCategoryDialog } from "./NewCategoryDialog";
import { SaveCategoryForm } from "./SaveCategoryForm";

export function SaveCategory() {
  const [isClosed, setIsClosed] = useState<boolean>(false);
  const [categories, setCategories] = useState<ICategories>([
    { _id: "", name: "", icon: "" },
  ]);

  const { ShowCategories } = useCategory();

  useEffect(() => {
    const getCategories = async () => {
      const allCategories = await ShowCategories();
      allCategories && setCategories(allCategories);
    };
    getCategories();
  }, [categories]);

  return (
    <div className="flex flex-col w-full gap-2 p-2 rounded-md bg-base-300 items-end">
      <div className="flex justify-center items-center w-full">
        <h1 className="text-2xl font-semibold">Categorias</h1>
      </div>
      <NewCategoryDialog isClosed={isClosed} setIsClosed={setIsClosed}>
        <SaveCategoryForm setIsClosed={setIsClosed} />
      </NewCategoryDialog>
      {categories &&
        categories.map((category) => (
          <div
            key={category._id}
            className="flex w-full p-2 gap-5 items-center justify-between rounded-md bg-neutral shadow-md">
            <div className="flex gap-5 max-sm:w-full max-sm:gap-2">
              <p className="text-xl font-semibold text-neutral-content">
                {category.icon}
              </p>
              <div className="flex gap-1">
                <p className="text-xl font-semibold text-neutral-content">
                  {category.name}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="btn btn-xs btn-square btn-ghost">
                <img src={Edit} alt="" />
              </button>
              <button className="btn btn-xs btn-square btn-ghost">
                <img src={Trash} alt="" />
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
