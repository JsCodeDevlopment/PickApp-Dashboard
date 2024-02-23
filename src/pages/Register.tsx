import Logo from "../assets/images/logo-for-lightBG.png";
import { SaveUserForm } from "../components/user-components/SaveUserForm";

export function Register() {
  
  return (
    <main className="flex flex-col items-center justify-center w-full m-5">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="flex w-full items-center justify-center mt-5">
          <img className="w-36" src={Logo} alt="" />
        </div>
        <div className="flex w-full mt-5 px-9 flex-col items-center justify-center ">
          <h1 className="text-xl text-primary">Hora de criar!</h1>
          <span className="loading loading-dots loading-sm"></span>
          <p className="text-md font-normal text-center">
            Já que não possui uma conta, vamos criar uma bem rapidinho!
          </p>
          <p className="text-sm font-light text-center">
            Preencha os campos abaixo e aperte em criar.
          </p>
        </div>
        <SaveUserForm/>
      </div>
    </main>
  );
}
