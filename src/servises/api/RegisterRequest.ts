import { toast } from "react-toastify";
import { IUser } from "../../interfaces/IUser";
import { baseURL } from "../BackEndBaseURL";
import { useNavigate } from "react-router-dom";

export function useRegister () {
    const navigate = useNavigate()

    const CreateUser = async ({ name, email, password, rule, imagePath  }: IUser) => {
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
                imagePath
            })
          });
    
          if (response.ok) {
            toast.success("Usuário criado com sucesso!", {
              autoClose: 1000 * 3,
            });
            navigate("/authenticate", {replace: true})
          } else {
            toast.error(`Erro ao criar conta.`, {
              autoClose: 1000 * 3,
            });
            navigate("/register", {replace: true})
          }
        } catch (error) {
          console.error(
            error,
            "Erro ao criar perfil."
          );
          toast.error(`${error} Erro ao criar perfil.`, {
              autoClose: 1000 * 3,
            }
          );
        }
      };
    return { CreateUser }
}
