import Logo from "../assets/images/logo-for-lightBG.png";

export function Wait() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="flex w-full items-center justify-center mt-5">
          <img className="w-36" src={Logo} alt="" />
        </div>
        <div className="flex w-full mt-5 px-9 pb-10 flex-col items-center justify-center ">
          <h1 className="text-xl text-primary">Estamos quase lá!</h1>
          <p className="text-sm font-light text-center">
            Verifique seu email e clique no botão de redefinição para continuar com a alteração de sua senha.
          </p>
        </div>
      </div>
    </main>
  );
}
