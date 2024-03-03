import { useEffect, useState } from "react";
import { useRegister } from "../../servises/api/RegisterRequest";
import { IUser } from "../../interfaces/IUser";
import ProfilePicture from "../../assets/images/profile.jpg";
import { baseURL } from "../../servises/BackEndBaseURL";
import { useLogin } from "../../context/LoginContext";

export function SaveUserForm() {
  const { CreateUser } = useRegister();
  const { logedUser, authenticateToken } = useLogin();
  const { UpdateUser } = useRegister()

  const [newUser, setNewUser] = useState<IUser>({
    name: logedUser?.user?.name || "",
    email: logedUser?.user?.email || "",
    password: "",
    imagePath: logedUser?.user?.imagePath || ProfilePicture,
    rule: logedUser?.user?.rule || "USER",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(()=>{
    authenticateToken()
  },[isLoading])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target;

    if (type === "file" && event.target instanceof HTMLInputElement) {
      const file = event.target.files?.[0];

      if (file) {
        setNewUser((prevState) => ({
          ...prevState,
          [name]: file,
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
    setIsLoading(true);

    if(!logedUser){
      await CreateUser(newUser);
      setIsLoading(false);
    } else {
      await UpdateUser(newUser.name, newUser.imagePath, logedUser.user._id);
      setIsLoading(false)
    }

  };
  return (
    <form action="/upload" method="POST" className="card-body">
      <div className="form-control">
        <div className="flex gap-4">
          <img
            className="rounded-full w-16 h-16"
            src={
              !logedUser
                ? ProfilePicture
                : `${baseURL}/uploads/${logedUser?.user.imagePath}`}
            alt=""/>
          <div className="flex flex-col">
            <label className="label">
              <span className="label-text">Foto de Perfil</span>
            </label>
            <input
              type="file"
              name="imagePath"
              value={""}
              onChange={handleInputChange}
              className="file-input file-input-xs file-input-bordered file-input-primary w-full max-w-xs"
              required/>
          </div>
        </div>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Nome Completo</span>
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
      {logedUser ? (
        <></>
      ) : (
        <>
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
              <span className="label-text">Senha</span>
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
        </>
      )}
      <div className="form-control mt-6">
        {!isLoading ? (
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary text-primary-content">
            Salvar
          </button>
        ) : (
          <button className="btn" disabled={true}>
            <span className="loading loading-spinner"></span> Carregando
          </button>
        )}
      </div>
    </form>
  );
}
