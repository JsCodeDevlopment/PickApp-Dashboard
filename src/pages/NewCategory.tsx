import { useState } from "react";
import { Header } from "../components/Header";
import { CategoryInfo } from "../components/category-components/CategoryInfo";
import { SaveCategory } from "../components/category-components/SaveCategory";
import { IFullCategory } from "../interfaces/ICategory";

export function NewCategory() {
  const [categoryInfo, setCategoryInfo] = useState<IFullCategory | undefined>(undefined)

  const handleDataUpdate = (item: IFullCategory) => {
    item && setCategoryInfo(item);
  };

  return (
    <div className="bg-base-100 w-full h-screen overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-neutral scrollbar-track-base-100">
      <Header />
      <div className="flex w-full p-3 gap-3 justify-around max-md:flex-col max-md:items-center max-md:gap-10">
        <div className="flex flex-col gap-5 items-center w-1/2 max-md:w-full">
          <SaveCategory onDataUpdate={handleDataUpdate}/>
        </div>
        <div className="w-1/2 flex flex-col gap-5 max-md:w-full">
          <CategoryInfo item={categoryInfo} />
        </div>
      </div>
    </div>
  );
}
