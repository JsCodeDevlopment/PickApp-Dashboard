import Logo from "../assets/images/logo-for-lightBG.png";

export function RecoverPassword() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="flex w-full items-center justify-center mt-5">
          <img className="w-36" src={Logo} alt="" />
        </div>
        <div className="flex w-full mt-5 px-9 flex-col items-center justify-center ">
          <h1 className="text-xl text-primary">Recuperar Senha</h1>
          <p className="text-sm font-light text-center">
            Sabemos que esquecer a senha pode ser frustrante, mas estamos aqui
            para ajudar!
          </p>
          <p className="text-sm font-light text-center">
            Verifique seu e-mail para receber instruções sobre como redefinir
            sua senha.
          </p>
        </div>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary text-primary-content">
              <a href="/dashboard">Recuperar</a>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
