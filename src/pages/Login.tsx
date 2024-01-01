import { FormEvent, useRef } from "react";
import Logo from "../assets/images/logo-for-lightBG.png";
import { toast } from "react-toastify";

export function LoginPage() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      toast.success(`! Mensagem enviada com sucesso! ✌`, {
        autoClose: 1000 * 3,
      });
    }
  };

  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="flex w-full items-center justify-center mt-5">
          <img className="w-36" src={Logo} alt="" />
        </div>
        <form ref={form} onSubmit={sendEmail} className="card-body">
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary text-secondary">
              <a href="/dashboard">Login</a>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
