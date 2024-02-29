import { Dispatch, SetStateAction } from "react";
import { ILogedUserInfo } from "./ILogedUser";

export interface ILoginContext {
  login: (email: string, password: string) => Promise<void | boolean>;
  logout: () => void;
  logedUser: ILogedUserInfo | undefined;
  logedUserToken: string;
  setLogedUser: Dispatch<SetStateAction<ILogedUserInfo | undefined>>
}
