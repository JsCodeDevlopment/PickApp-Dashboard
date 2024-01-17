import { ILogedUser } from "./ILogedUser";

export interface ILoginContext {
  login: (email: string, password: string) => Promise<void | boolean>;
  logout: () => void;
  logedUser: ILogedUser | undefined;
}