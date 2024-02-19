import { useEffect, useState } from "react";
import { useCategory } from "../../servises/api/CategoryRequest";
import Edit from "../../assets/images/edit.png";
import Add from "../../assets/images/PlusLight.png";
import Icon from "../../assets/images/categories.png";
import { NewCategoryDialog } from "./NewCategoryDialog";
import { SaveCategoryForm } from "./SaveCategoryForm";
import { DeleteCategoryDialog } from "./DeleteCategoryDialog";
import { IFullCategory } from "../../interfaces/ICategory";

interface ISaveCategoryProps {
  onDataUpdate: (item: IFullCategory) => void;
}

export function SaveCategory({ onDataUpdate }: ISaveCategoryProps) {
  const [isClosed, setIsClosed] = useState<boolean>(false);
  const [fullCategory, setFullCategory] = useState<IFullCategory[]>([]);

  const { ShowCategoryInfo } = useCategory();

  const getFullCategoryInfo = async () => {
    const fullCategory = await ShowCategoryInfo();
    fullCategory && setFullCategory(fullCategory);
  };

  useEffect(() => {
    getFullCategoryInfo();
  }, []);

  const CategoryInfo = (item: IFullCategory) => {
    item && onDataUpdate(item);
  };

  return (
    <div className="flex flex-col w-full gap-2 p-2 rounded-md bg-base-300 items-end">
      <div className="flex justify-center items-center gap-2 w-full">
        <img className="w-6 h-6" src={Icon} />
        <h1 className="text-2xl font-semibold">Categorias</h1>
      </div>
      <NewCategoryDialog
        isClosed={isClosed}
        setIsClosed={setIsClosed}
        icon={Add}>
        <SaveCategoryForm
          setIsClosed={setIsClosed}
          getCategories={getFullCategoryInfo}/>
      </NewCategoryDialog>
      {fullCategory &&
        fullCategory.map((item) => (
          <div
            onClick={() => CategoryInfo(item)}
            key={item.category._id}
            className="flex w-full p-2 gap-5 items-center justify-between rounded-md bg-neutral shadow-md">
            <div className="flex gap-5 max-sm:w-full max-sm:gap-2">
              <p className="text-xl font-semibold text-neutral-content">
                {item.category.icon}
              </p>
              <div className="flex gap-1">
                <p className="text-xl font-semibold text-neutral-content">
                  {item.category.name}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <NewCategoryDialog
                isClosed={isClosed}
                setIsClosed={setIsClosed}
                icon={Edit}>
                <SaveCategoryForm
                  setIsClosed={setIsClosed}
                  category={item.category}
                  getCategories={getFullCategoryInfo}/>
              </NewCategoryDialog>
              <DeleteCategoryDialog
                isClosed={isClosed}
                setIsClosed={setIsClosed}
                id={item.category._id}
                productCount={item.productCount}
                getCategories={getFullCategoryInfo}/>
            </div>
          </div>
        ))}
    </div>
  );
}
