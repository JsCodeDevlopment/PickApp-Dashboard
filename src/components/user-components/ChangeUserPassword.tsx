import { useState } from "react";

interface IPass {
  lastPass: string;
  newPass: string;
  confirmPass: string;
}

export function ChangeUserPassword() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pass, setPass] = useState<IPass>({
    lastPass: "",
    newPass: "",
    confirmPass: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (event.target instanceof HTMLInputElement) {
      setPass((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
  };

  return (
    <form action="/upload" method="POST" className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Senha atual</span>
        </label>
        <input
          type="password"
          name="lastPass"
          value={pass.lastPass}
          onChange={handleInputChange}
          placeholder="Senha atual"
          className="input input-bordered"
          required/>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Nova senha</span>
        </label>
        <input
          type="password"
          name="newPass"
          value={pass.newPass}
          onChange={handleInputChange}
          placeholder="Nova senha"
          className="input input-bordered"
          required/>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Confirmar senha</span>
        </label>
        <input
          type="password"
          name="confirmPass"
          value={pass.confirmPass}
          onChange={handleInputChange}
          placeholder="Confirmar senha"
          className="input input-bordered"
          required/>
      </div>
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
