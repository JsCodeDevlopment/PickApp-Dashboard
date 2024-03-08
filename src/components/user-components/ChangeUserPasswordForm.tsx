import { useState } from "react";
import { toast } from "react-toastify";
import { useRegister } from "../../servises/api/RegisterRequest";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const changeUsePassword = z.object({
  lastPass: z.string().min(6, "Sua senha deve ter um minimo de 6 caracteres."),
  newPass: z.string().min(6, "Sua senha deve ter um minimo de 6 caracteres."),
  confirmPass: z.string().min(6, "Sua senha deve ter um minimo de 6 caracteres.")
})

type changeUsePassword = z.infer<typeof changeUsePassword>

export function ChangeUserPasswordForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { UpdateUserPassword } = useRegister()

  const { register, handleSubmit, formState:{errors} } = useForm<changeUsePassword>({
    resolver: zodResolver(changeUsePassword)
  })

  const handleChange = async (data: changeUsePassword) => {
    if (data.newPass !== data.confirmPass) {
      toast.error(`Nova senha e a senha de confirmação precisam ser iguais.`, {
        autoClose: 1000 * 3,
      });
      return
    }
    setIsLoading(true);
    const update = await UpdateUserPassword(data.lastPass, data.newPass)
    !update && setIsLoading(false)
  };

  return (
    <form onSubmit={handleSubmit(handleChange)} className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Senha atual</span>
        </label>
        <input
          type="password"
          {...register("lastPass")}
          placeholder="Senha atual"
          className={`input input-bordered ${errors.lastPass && "input-error"}`}
          required/>
          {errors.lastPass && <span>{errors.lastPass.message}</span>}
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Nova senha</span>
        </label>
        <input
          type="password"
          {...register("newPass")}
          placeholder="Nova senha"
          className={`input input-bordered ${errors.newPass && "input-error"}`}
          required/>
          {errors.newPass && <span>{errors.newPass.message}</span>}
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Confirmar senha</span>
        </label>
        <input
          type="password"
          {...register("confirmPass")}
          placeholder="Confirmar senha"
          className={`input input-bordered ${errors.confirmPass && "input-error"}`}
          required/>
          {errors.confirmPass && <span>{errors.confirmPass.message}</span>}
      </div>
      <div className="form-control mt-6">
        {!isLoading ? (
          <button
            type="submit"
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
