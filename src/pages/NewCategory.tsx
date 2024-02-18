import { Header } from "../components/Header";
import { SaveCategory } from "../components/SaveCategory";

export type ICategories = {
  _id: string;
  name: string;
  icon: string;
}[];

export function NewCategory() {

  return (
    <div className="bg-base-100 w-full h-screen overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-neutral scrollbar-track-base-100">
      <Header />
      <div className="flex w-full p-3 gap-3 justify-around max-md:flex-col max-md:items-center max-md:gap-10">
        <div className="flex flex-col gap-5 items-center w-1/2 max-md:w-full">
          <SaveCategory />
        </div>
        <div className="w-1/2 flex flex-col gap-5 max-md:w-full">
          Aqui futuramente terá alguma coisa!
        </div>
      </div>
    </div>
  );
}
