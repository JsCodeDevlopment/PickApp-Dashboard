import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { baseURL } from "../servises/BackEndBaseURL";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ILoginContext } from "../interfaces/ILoginContext";
import { ILogedUserInfo } from "../interfaces/ILogedUser";
import { useRegister } from "../servises/api/RegisterRequest";
import { IFullUser } from "../interfaces/IUser";

export const LoginContext = createContext({} as ILoginContext);

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [logedUser, setLogedUser] = useState<ILogedUserInfo | undefined>(undefined);
  const [AllUsers, setAllUsers] = useState<IFullUser[] | undefined>(undefined);
  const [logedUserToken, setLogedUserToken] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();
  const { ShowAllRegisters } = useRegister();


  const login = async (email: string, password: string): Promise<void | boolean> => {
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
        setLogedUserToken(data.token)
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

  const getAllUsers = async () => {
    const allUsers = await ShowAllRegisters();
    setAllUsers(allUsers)
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
        setLogedUserToken(token)
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
    setLogedUser(undefined)

    if (!isAuthenticated) {
      toast.success("Desconectado com sucesso!", {
        autoClose: 1000 * 3,
      });
      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    getAllUsers()

    if (!isAuthenticated) {
      authenticateToken()
    }

    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
    } else if (location.pathname !== "/" && !location.pathname.includes("changepassword")) {
      navigate("/", { replace: true });
    } 
  }, [isAuthenticated]);

  return (
    <LoginContext.Provider value={{ logedUser, AllUsers, login, logout, setLogedUser, logedUserToken }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
