import { Dispatch, SetStateAction } from "react";
import { ILogedUserInfo } from "./ILogedUser";
import { IFullUser } from "./IUser";

export interface ILoginContext {
  login: (email: string, password: string) => Promise<void | boolean>;
  logout: () => void;
  logedUser: ILogedUserInfo | undefined;
  AllUsers: IFullUser[] | undefined;
  logedUserToken: string;
  setLogedUser: Dispatch<SetStateAction<ILogedUserInfo | undefined>>
  authenticateToken: () => Promise<void>
  getAllUsers: () => Promise<void>
}
