import { toast } from "react-toastify";
import { IUser } from "../../interfaces/IUser";
import { baseURL } from "../BackEndBaseURL";
import { useNavigate } from "react-router-dom";

export function useRegister() {
  const navigate = useNavigate();

  const CreateUser = async ({ name, email, password, rule, imagePath}: IUser): Promise<void> => {
    try {
      const formData = new FormData()

      formData.append("name", name)
      formData.append("email", email)
      formData.append("password", password)
      formData.append("rule", rule)
      formData.append("image", imagePath)

      const response = await fetch(`${baseURL}/register`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Usuário criado com sucesso!", {
          autoClose: 1000 * 3,
        });
        navigate("/authenticate", { replace: true });
      } else {
        toast.error(`Erro ao criar conta.`, {
          autoClose: 1000 * 3,
        });
        navigate("/register", { replace: true });
      }
    } catch (error) {
      console.error(error, "Erro ao criar perfil.");
      toast.error(`${error} Erro ao criar perfil.`, {
        autoClose: 1000 * 3,
      });
    }
  };

  const UpdateUser = async (name: string, imagePath: string, id: string): Promise<IUser | undefined> => {
    try {
      const formData = new FormData()

      formData.append("name", name)
      formData.append("image", imagePath)

      const response = await fetch(`${baseURL}/register?id=${id}`, {
        method: "PATCH",
        body: formData,
      });
      const data = await response.json() as IUser
      if (response.ok) {
        toast.success("Tudo ok! Recarregue para ver as alterações!", {
          autoClose: 1000 * 3,
        });
        return data
      } else {
        toast.error(`Erro ao ditar perfil.`, {
          autoClose: 1000 * 3,
        });
      }
    } catch (error) {
      console.error(error, "Erro na requisição de editar perfil.");
      toast.error(`${error} Erro na requisição de editar perfil.`, {
        autoClose: 1000 * 3,
      });
    }
  };

  const VerifyToken = async (token: string): Promise<string | undefined> => {
    try {
      const response = await fetch(`${baseURL}/verify/${token}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      const data = await response.json() as string

      if (response.ok) {
        toast.success("Criação finalizada com sucesso!!!", {
          autoClose: 1000 * 3,
        });
        navigate("/dashboard", { replace: true });
        return data
      } else {
        toast.error(`Erro ao criar conta.`, {
          autoClose: 1000 * 3,
        });
        navigate("/register", { replace: true });
      }

    } catch (error){
      console.error(error, "Erro na requisição de verificação do token.")
      toast.error(`Erro na requisição de verificação do token.`, {
        autoClose: 1000 * 3,
      });
    }
  } 

  const ForgotPassword = async (email: string): Promise<void | undefined> => {
    try {
      const response = await fetch(`${baseURL}/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email}),
      });

      if (response.ok) {
        navigate("/wait", { replace: true });
      } else {
        toast.error(`Erro ao enviar email.`, {
          autoClose: 1000 * 3,
        });
        return
      }

    } catch (error){
      console.error(error, "Erro na requisição de verificação do token.")
      toast.error(`Erro na requisição de verificação do token.`, {
        autoClose: 1000 * 3,
      });
    }
  }

  const ChangePassword = async (token: string, password: string) => {
    try {
      const response = await fetch(`${baseURL}/reset-password?token=${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({password}),
      });

      if (response.ok) {
        toast.error(`Senha alterada com sucesso!`, {
          autoClose: 1000 * 3,
        });
        navigate("/", { replace: true });
      } else {
        toast.error(`Erro ao atualizar a senha.`, {
          autoClose: 1000 * 3,
        });
        navigate("/recover", { replace: true });
      }

    } catch (error){
      console.error(error, "Erro na requisição de verificação do token.")
      toast.error(`Erro na requisição de verificação do token.`, {
        autoClose: 1000 * 3,
      });
    }
  }

  return { CreateUser, VerifyToken, ForgotPassword, ChangePassword, UpdateUser };
}
