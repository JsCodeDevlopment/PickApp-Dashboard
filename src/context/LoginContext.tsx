import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { baseURL } from "../servises/BackEndBaseURL";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ILogedUser } from "../interfaces/ILogedUser";
import { ILoginContext } from "../interfaces/ILoginContext";

export const LoginContext = createContext({} as ILoginContext);

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [logedUser, setLogedUser] = useState<ILogedUser>();
  const navigate = useNavigate();
  const location = useLocation();

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
      if (response.ok) {
        localStorage.setItem("acessToken", data.token);
        setLogedUser(data);
        setIsAuthenticated(true);
      } else {
        toast.error("Acesso negado, senha ou email incorretos.", {
          autoClose: 1000 * 3,
        });
      }
    } catch (error) {
      console.error(error, "Erro ao fazer a requisição.");
    }
  };

  const authenticateToken = async () => {
    try {
      const token = localStorage.getItem("acessToken")  
      if (!token) {
        return
      }
      const response = await fetch(`${baseURL}/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await response.json();
      
      if (response.ok) {
        setLogedUser(data);
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem("acessToken")
      }
    } catch (error) {
      console.error(error, "Erro ao fazer a requisição.");
    }
  }

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("acessToken")

    if (!isAuthenticated) {
      toast.success("Desconectado com sucesso!", {
        autoClose: 1000 * 3,
      });
      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      authenticateToken()
    }

    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
    } else if (location.pathname !== "/") {
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
