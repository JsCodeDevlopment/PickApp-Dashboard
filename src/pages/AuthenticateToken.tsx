import { useParams } from "react-router-dom";
import Logo from "../assets/images/logo-for-lightBG.png";

export function AuthenticateToken() {

  const { token } = useParams()
  console.log(token);
  

  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="flex w-full items-center justify-center mt-5">
          <img className="w-36" src={Logo} alt="" />
        </div>
        <div className="flex w-full mt-5 px-9 flex-col items-center justify-center ">
          <h1 className="text-xl text-primary f">Última etapa, Prometo!</h1>
          <span className="loading loading-dots loading-sm"></span>
          <p className="text-md font-normal text-center">
            Parabéns sua conta está 99% concluida!
          </p>
          <p className="text-sm font-light text-center">
            Para finalizar cole aqui o token que você recebeu no seu email e faça a verificação.
          </p>
        </div>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Token</span>
            </label>
            <input
              type="email"
              placeholder="Verification Token"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary text-secondary">
              <a href="/dashboard">Verificar</a>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
