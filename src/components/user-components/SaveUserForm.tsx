import { useState } from "react";
import { useRegister } from "../../servises/api/RegisterRequest";
import { IUser } from "../../interfaces/IUser";
import ProfilePicture from "../../assets/images/profile.jpg";
import { baseURL } from "../../servises/BackEndBaseURL";
import { useLogin } from "../../context/LoginContext";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const saverUserSchema = z.object({
  imagePath:z.instanceof(FileList).transform(fileList=>fileList.item(0) ?? undefined).optional(),
  name: z.string().min(5, "O nome precisa ter no minimo 5 caracteres."),
  email: z.string().email("Digite um formato de email válido.").optional(),
  password: z.string().min(6, "Sua senha deve ter um minimo de 6 caracteres.").optional(),
  rule: z.boolean().transform(rule=>rule ? "ADM" : "USER").optional()
})

type saverUserSchema = z.infer<typeof saverUserSchema>

export function SaveUserForm() {
  const { CreateUser } = useRegister();
  const { logedUser, authenticateToken } = useLogin();
  const { UpdateUser } = useRegister()

  const { register, handleSubmit, formState:{errors} } = useForm<saverUserSchema>({
    resolver: zodResolver(saverUserSchema),
    defaultValues: {
      name: logedUser?.user.name ?? "",
    }
  })

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSave = async (data: saverUserSchema) => {
    
    console.log(data)
    console.log(!logedUser ? "crie um usuário" : "esse é o usuário logado",logedUser)
    
    setIsLoading(true);

    if(!logedUser){
      await CreateUser(data as unknown as IUser);
      setIsLoading(false);
    } else {
      console.log("caiu no else")
      const updatedUser = await UpdateUser(data.name, logedUser.user._id, data.imagePath);
      updatedUser && authenticateToken()
      setIsLoading(false)
    }

  };
  return (
    <form onSubmit={handleSubmit(handleSave)} className="card-body">
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
              {...register("imagePath")}
              className="file-input file-input-xs file-input-bordered file-input-primary w-full max-w-xs"/>
          </div>
        </div>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Nome Completo</span>
        </label>
        <input
          type="text"
          {...register("name")}
          placeholder="Name"
          className="input input-bordered"
          required/>
          {errors.name && <span>{errors.name.message}</span>}
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
              {...register("email")}
              placeholder="Email"
              className="input input-bordered"
              required/>
              {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Senha</span>
            </label>
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
              className="input input-bordered"
              required/>
              {errors.password && <span>{errors.password.message}</span>}
            <label className="label">
              <p className="label-text">Criar como administrador?</p>
              <input
                type="checkbox"
                {...register("rule")}
                className="toggle toggle-primary"/>
            </label>
          </div>
        </>
      )}
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
