import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { ChartsMenu } from "../components/ChartsMenu";

export function Charts() {
  return (
    <div className="bg-base-100 w-full h-screen overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-neutral scrollbar-track-base-100">
      <Header />
      <div className="flex w-full p-3 gap-3 justify-between max-xl:flex-col max-lg:items-center max-lg:gap-10">
        <div className="flex flex-col gap-5 max-xl:w-full max-xl:items-center">
          <ChartsMenu />
        </div>
        <div className="flex w-full items-center justify-between">
          <Outlet/>
        </div>
      </div>
    </div>
  );
}
