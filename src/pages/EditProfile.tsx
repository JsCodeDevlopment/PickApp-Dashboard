import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { EditOrganizationMenu } from "../components/user-components/EditOrganizationMenu";
import { EditUserMenu } from "../components/user-components/EditUserMenu";

export function EditProfile() {

  return (
    <div className="bg-base-100 w-full h-screen overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-neutral scrollbar-track-base-100">
      <Header />
      <div className="flex w-full p-3 gap-3 justify-between max-md:flex-col max-md:items-center max-md:gap-10">
        <div className="flex flex-col gap-5 max-sm:w-full">
          <EditUserMenu />
          <EditOrganizationMenu />
        </div>
        <div className="flex w-2/3 items-center justify-center max-sm:w-full">
          <Outlet/>
        </div>
      </div>
    </div>
  );
}
