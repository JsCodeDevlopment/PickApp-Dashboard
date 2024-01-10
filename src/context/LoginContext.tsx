import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { baseURL } from "../servises/BackEndBaseURL";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface IAcessToken {
  token: string;
}{}

export const LoginContext = createContext({} as any);

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [acessToken, setAcessToken] = useState<IAcessToken>();
  const navigate = useNavigate();

  const login = async (
    email: string,
    password: string
  ): Promise<void | boolean> => {
    try {
      const response = await fetch(`${baseURL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      setAcessToken(data);
      if (data) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error(error, "Erro ao fazer a requisição.");
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
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
    <LoginContext.Provider value={{ acessToken, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
