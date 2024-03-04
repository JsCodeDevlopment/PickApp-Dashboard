import { toast } from "react-toastify";
import { IFullUser, IUser } from "../../interfaces/IUser";
import { baseURL } from "../BackEndBaseURL";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../context/LoginContext";

export function useRegister() {
  const navigate = useNavigate();
  const { logedUserToken } = useLogin();

  const CreateUser = async ({ name, email, password, rule, imagePath }: IUser): Promise<void> => {
    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("rule", rule);
      formData.append("image", imagePath);

      const response = await fetch(`${baseURL}/register`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Processo de criação iniciado com sucesso!", {
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

  const UpdateUser = async ( name: string, id: string, imagePath?: File ): Promise<IUser | undefined> => {
    try {
      const formData = new FormData();

      formData.append("name", name);
      if(imagePath)formData.append("image", imagePath);

      const response = await fetch(`${baseURL}/register?id=${id}`, {
        method: "PATCH",
        body: formData,
      });
      const data = (await response.json()) as IUser;
      if (response.ok) {
        toast.success("Alteração concluida com sucesso!", {
          autoClose: 1000 * 3,
        });
        return data;
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

  const UpdateUserRule = async (id: string) => {
    try {
      const response = await fetch(`${baseURL}/register/rule/${id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${logedUserToken}`,
          "Content-Type": "application/json",
        },
      });
      const data = (await response.json()) as IUser;
      if (response.ok) {
        toast.success("Permição alterada com sucesso!", {
          autoClose: 1000 * 3,
        });
        return data;
      } else {
        toast.error(`Erro ao ditar permissão.`, {
          autoClose: 1000 * 3,
        });
      }
    } catch (error) {
      console.error(error, "Erro na requisição de editar permições.");
      toast.error(`${error} Erro na requisição de editar permições.`, {
        autoClose: 1000 * 3,
      });
      return;
    }
  };

  const ShowAllRegisters = async (): Promise<IFullUser[] | undefined> => {
    try {
      const response = await fetch(`${baseURL}/register`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data: IFullUser[] = await response.json();
      return data;
    } catch (error) {
      console.error(error, "Erro ao requisitar todos os usuários cadastrados.");
      return;
    }
  };

  const UpdateUserPassword = async ( lastPassword: string, newPassword: string ): Promise<void | undefined> => {
    try {
      const response = await fetch(`${baseURL}/register/update-password`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${logedUserToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lastPassword,
          newPassword,
        }),
      });

      if (response.ok) {
        toast.success("Senha Alterada com sucesso.", {
          autoClose: 1000 * 3,
        });
      } else {
        toast.error(`Erro na alteração da senha.`, {
          autoClose: 1000 * 3,
        });
        return;
      }
    } catch (error) {
      console.error(error, "Erro na requisição de edição de senha.");
      toast.error(`${error} Erro na requisição de edição de senha.`, {
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
        },
      });
      const data = (await response.json()) as string;

      if (response.ok) {
        toast.success("Criação finalizada com sucesso!!!", {
          autoClose: 1000 * 3,
        });
        navigate("/dashboard", { replace: true });
        return data;
      } else {
        toast.error(`Erro ao criar conta.`, {
          autoClose: 1000 * 3,
        });
        navigate("/register", { replace: true });
      }
    } catch (error) {
      console.error(error, "Erro na requisição de verificação do token.");
      toast.error(`Erro na requisição de verificação do token.`, {
        autoClose: 1000 * 3,
      });
    }
  };

  const ForgotPassword = async (email: string): Promise<void | undefined> => {
    try {
      const response = await fetch(`${baseURL}/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        navigate("/wait", { replace: true });
      } else {
        toast.error(`Erro ao enviar email.`, {
          autoClose: 1000 * 3,
        });
        return;
      }
    } catch (error) {
      console.error(error, "Erro na requisição de verificação do token.");
      toast.error(`Erro na requisição de verificação do token.`, {
        autoClose: 1000 * 3,
      });
    }
  };

  const DeleteUser = async (id: string): Promise<void> => {
    try {
      const response = await fetch(`${baseURL}/register/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${logedUserToken}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        toast.success("Usuário deletado com sucesso!", {
          autoClose: 1000 * 3,
        });
      } else {
        toast.error("Você não possui autorização para deletar usuários!", {
          autoClose: 1000 * 3,
        });
      }
    } catch (error) {
      console.error(error, "Erro ao requisitar a exclusão do usuário.");
      toast.error(`${error} Erro ao requisitar a exclusão do usuário.`, {
        autoClose: 1000 * 3,
      });
    }
  };

  const ChangePassword = async (token: string, password: string) => {
    try {
      const response = await fetch(`${baseURL}/reset-password?token=${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
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
    } catch (error) {
      console.error(error, "Erro na requisição de verificação do token.");
      toast.error(`Erro na requisição de verificação do token.`, {
        autoClose: 1000 * 3,
      });
    }
  };

  return {
    CreateUser,
    ShowAllRegisters,
    VerifyToken,
    ForgotPassword,
    ChangePassword,
    UpdateUser,
    UpdateUserPassword,
    DeleteUser,
    UpdateUserRule,
  };
}
