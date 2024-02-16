import { useEffect, useState } from "react";
import { useCategory } from "../servises/api/CategoryRequest";
import { ICategories } from "../pages/NewItems";
import Edit from "../assets/images/edit.png";
import Add from "../assets/images/PlusLight.png";
import { NewCategoryDialog } from "./NewCategoryDialog";
import { SaveCategoryForm } from "./SaveCategoryForm";
import { DeleteCategoryDialog } from "./DeleteCategoryDialog";

export function SaveCategory() {
  const [isClosed, setIsClosed] = useState<boolean>(false);
  const [categories, setCategories] = useState<ICategories>([{ _id: "", name: "", icon: "" }]);

  const { ShowCategories } = useCategory();

  const getCategories = async () => {
    const allCategories = await ShowCategories();
    allCategories && setCategories(allCategories);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="flex flex-col w-full gap-2 p-2 rounded-md bg-base-300 items-end">
      <div className="flex justify-center items-center w-full">
        <h1 className="text-2xl font-semibold">Categorias</h1>
      </div>
      <NewCategoryDialog isClosed={isClosed} setIsClosed={setIsClosed} icon={Add}>
        <SaveCategoryForm setIsClosed={setIsClosed} getCategories={getCategories} />
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
              <NewCategoryDialog isClosed={isClosed} setIsClosed={setIsClosed} icon={Edit}>
                <SaveCategoryForm setIsClosed={setIsClosed} category={category} getCategories={getCategories} />
              </NewCategoryDialog>
              <DeleteCategoryDialog isClosed={isClosed} setIsClosed={setIsClosed} id={category._id} getCategories={getCategories}/>
            </div>
          </div>
        ))}
    </div>
  );
}
