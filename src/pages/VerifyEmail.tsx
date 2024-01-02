import Logo from "../assets/images/logo-for-lightBG.png";

export function VerifyEmail() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="flex w-full items-center justify-center mt-5">
          <img className="w-36" src={Logo} alt="" />
        </div>
        <div className="flex w-full mt-5 px-9 flex-col items-center justify-center ">
          <h1 className="text-xl text-primary">Sua conta foi criada.</h1>
          <h1 className="text-xl text-primary">Agora só falta 1 estapa!</h1>
          <p className="text-sm font-light text-center">
            Se você preencheu tudo certinho, nesse exato momento você deve receber um email para fazer a verificação.
          </p>
          <p className="text-sm font-light text-center">
            Entre no seu email e faça a verificação para conseguir usar sua conta.
          </p>
        </div>
        <form className="card-body">
          <div className="form-control mt-6">
            <button className="btn btn-primary text-secondary">
              <a href="/dashboard">Fazer Login</a>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
