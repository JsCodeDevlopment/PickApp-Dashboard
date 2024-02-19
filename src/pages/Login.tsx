import { FormEvent, useState } from "react";
import Logo from "../assets/images/logo-for-lightBG.png";
import LogoDark from "../assets/images/logo-for-darkBG.png";
import { Link } from "react-router-dom";
import { useLogin } from "../context/LoginContext";
import { useTheme } from "../context/ThemeContext";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLogin();
  const { currentTheme } = useTheme();

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    await login(email, password);
  };

  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="flex w-full items-center justify-center mt-5">
          {currentTheme === "mytheme" ? (
            <img className="w-36" src={Logo} alt="" />
          ) : (
            <img className="w-36" src={LogoDark} alt="" />
          )}
        </div>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              placeholder="Email"
              className="input input-bordered"
              required/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              placeholder="Password"
              className="input input-bordered"
              required/>
            <label className="label">
              <Link to={"/recover"} className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary text-primary-content">
              Login
            </button>
          </div>
        </form>
        <div className="flex absolute bottom-1 w-full gap-1 items-center justify-center">
          <p className="text-sm">Dont have account?</p>
          <Link
            to={"/register"}
            className="label-text-alt text-sm text-primary link link-hover">
            Create
          </Link>
        </div>
      </div>
    </main>
  );
}
