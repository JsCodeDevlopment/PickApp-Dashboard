import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { baseURL } from "../servises/BackEndBaseURL";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ILogedUser } from "../interfaces/ILogedUser";
import { ILoginContext } from "../interfaces/ILoginContext";

export const LoginContext = createContext({} as ILoginContext);

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [logedUser, setLogedUser] = useState<ILogedUser>();
  const navigate = useNavigate();

  const login = async ( email: string, password: string ): Promise<void | boolean> => {
    try {
      const response = await fetch(`${baseURL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
    
      setLogedUser(data);
      if (data) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error(error, "Erro ao fazer a requisição.");
    }
  };

  const logout = () => {
    setIsAuthenticated(false);

    if (!isAuthenticated) {
      toast.success("Desconectado com sucesso!", {
        autoClose: 1000 * 3,
      });
      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      toast.success("Acesso liberado com sucesso!", {
        autoClose: 1000 * 3,
      });
      navigate("/dashboard", { replace: true });
    } else {
      toast.error("Acesso negado, tente logar novamente.", {
        autoClose: 1000 * 3,
      });
      navigate("/", { replace: true });
    }
  }, [isAuthenticated]);

  return (
    <LoginContext.Provider value={{ logedUser, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
