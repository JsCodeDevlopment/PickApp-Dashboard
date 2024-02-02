import { useEffect, useState } from "react";
import { ProductToBuy } from "./ProductsToBuy";
import { ICategories } from "../pages/NewItems";
import { useCategory } from "../servises/api/CategoryRequest";

interface IProductsPerCategoryProps {
  add: ()=> void
}

export function ProductsPerCategory({add}: IProductsPerCategoryProps) {
  const [categories, setCategories] = useState<ICategories>([{ _id: "", name: "", icon: "" },]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const { ShowCategories } = useCategory();

  useEffect(() => {
    const getCategories = async () => {
      const allCategories = await ShowCategories();

      if (allCategories) {
        setCategories(allCategories);
      }
    };
    getCategories();
  }, []);

  const handleClick = (id: string) => {
    setSelectedCategory(id)
  }

  return (
    <div className="flex flex-col w-full gap-2 p-2 shadow-md rounded-md items-center justify-center">
      <div className="flex items-center justify-center w-full rounded-md bg-base-200">
        <h1 className="text-xl font-semibold">Escolha uma categoria</h1>
      </div>
      <div className="flex items-center w-full rounded-md p-2 gap-3">
        {categories &&
          categories.map((category) => (
            <div
              onClick={() => handleClick(category._id)}
              key={category._id}
              className="flex flex-col items-center justify-center cursor-pointer">
              <div className="flex items-center justify-center w-9 h-9 glass shadow-md rounded-full">
                <h1 className="text-xl">{category.icon}</h1>
              </div>
              <p>{category.name}</p>
            </div>
          ))}
      </div>
      <ProductToBuy category={selectedCategory} add={add} />
    </div>
  );
}
