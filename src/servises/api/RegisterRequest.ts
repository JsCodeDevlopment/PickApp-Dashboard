import { toast } from "react-toastify";
import { IUser } from "../../interfaces/IUser";
import { baseURL } from "../BackEndBaseURL";
import { useNavigate } from "react-router-dom";

export function useRegister() {
  const navigate = useNavigate();

  const CreateUser = async ({ name, email, password, rule, imagePath,}: IUser): Promise<void> => {
    try {
      const response = await fetch(`${baseURL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          rule,
          imagePath,
        }),
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

  return { CreateUser, VerifyToken };
}
