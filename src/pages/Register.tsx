import { useState } from "react";
import Logo from "../assets/images/logo-for-lightBG.png";
import { useRegister } from "../servises/api/RegisterRequest";
import { IUser } from "../interfaces/IUser";

export function Register() {
  const { CreateUser } = useRegister();
  const [newUser, setNewUser] = useState<IUser>({
    name: "",
    email: "",
    password: "",
    imagePath: "",
    rule: "USER",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    if (name === "imagePath") {
      const fullPath = value;
      const match = fullPath.match(/\\([^\\]+)$/);
      if (match) {
        const fileName = match[1].toString();
        setNewUser((prevState) => ({
          ...prevState,
          [name]: fileName,
        }));
      }
    } else {
      setNewUser((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setNewUser((prevState) => ({
      ...prevState,
      [name]: checked ? "ADM" : "USER",
    }));
  };

  const handleSubmit = async () => {
    await CreateUser({
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      imagePath: newUser.imagePath,
      rule: newUser.rule,
    });
    console.log("resposta dos inputs →", newUser);
  };

  return (
    <main className="flex flex-col items-center justify-center w-full m-5">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="flex w-full items-center justify-center mt-5">
          <img className="w-36" src={Logo} alt="" />
        </div>
        <div className="flex w-full mt-5 px-9 flex-col items-center justify-center ">
          <h1 className="text-xl text-primary f">Hora de criar!</h1>
          <span className="loading loading-dots loading-sm"></span>
          <p className="text-md font-normal text-center">
            Já que não possui uma conta, vamos criar uma bem rapidinho!
          </p>
          <p className="text-sm font-light text-center">
            Preencha os campos abaixo e aperte em criar.
          </p>
        </div>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Profile Picture</span>
            </label>
            <input
              type="file"
              name="imagePath"
              value={""}
              onChange={handleInputChange}
              className="file-input file-input-xs file-input-bordered file-input-primary w-full max-w-xs"
              required/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={newUser.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="input input-bordered"
              required/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={newUser.email}
              onChange={handleInputChange}
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
              name="password"
              value={newUser.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="input input-bordered"
              required/>
            <label className="label">
              <p className="label-text">Criar como administrador?</p>
              <input
                type="checkbox"
                name="rule"
                checked={newUser.rule === "ADM"}
                onChange={handleCheckboxChange}
                className="toggle toggle-primary"/>
            </label>
          </div>
          <div className="form-control mt-6">
            <button
              onClick={handleSubmit}
              className="btn btn-primary text-secondary">
              Criar
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
