import { FormEvent, useEffect, useState } from "react";
import Logo from "../assets/images/logo-for-lightBG.png";
import { useRegister } from "../servises/api/RegisterRequest";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

export function ChangePassword() {
  const [password, setPassword] = useState<string>("")
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("")
  const [waiting, setWaiting] = useState<boolean>(false)
  const [searchParams] = useSearchParams()
  const token = searchParams.get("token")
  const navigate = useNavigate()
  

  const { ChangePassword } = useRegister()

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    if (password !== passwordConfirmation) {
      toast.error(`As senhas devem ser exatamente iguais.`, {
        autoClose: 1000 * 3,
      });
      return
    }

    setWaiting(true)
    await ChangePassword(token!, password)
  }
  useEffect(() => {
    if (!token) {
      navigate("/", {replace: false})
    }
  },[])
  

  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="flex w-full items-center justify-center mt-5">
          <img className="w-36" src={Logo} alt="" />
        </div>
        <div className="flex w-full mt-5 px-9 flex-col items-center justify-center ">
          <h1 className="text-xl text-primary">Redefina sua senha</h1>
          <p className="text-sm font-light text-center">
            Prontinho! Agora basta escolher sua nova senha...
          </p>
        </div>
        <form 
        onSubmit={handleSubmit}
        method="post" 
        className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Nova Senha</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Senha"
              className="input input-bordered"
              required/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirmar Senha</span>
            </label>
            <input
              type="password"
              value={passwordConfirmation}
              onChange={(e)=>setPasswordConfirmation(e.target.value)}
              placeholder="Confirme sua senha."
              className="input input-bordered"
              required/>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary text-primary-content">
              {waiting ? (<span className="loading loading-dots loading-sm"></span>) : "Recuperar"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
