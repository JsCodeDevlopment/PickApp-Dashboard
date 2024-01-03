import { ReactNode, createContext, useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { baseURL } from "../servises/BackEndBaseURL";

export const LoginContext = createContext({} as any);

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

  const login = async (email: string, password: string): Promise<void> => {
    try {
      const response = await fetch(`${baseURL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      setIsAuthenticated(true);
      return data;
    } catch (error) {
      console.error(error, "Erro ao fazer a requisição.");
    }
  };

//   const logout = () => {
//     setIsAuthenticated(false);
//     navigate("/", { replace: true });
//   };

  return (
    <LoginContext.Provider
      value={{ isAuthenticated, login, setIsAuthenticated }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext)