export interface ILogedUserInfo {
  user: {
    id: string
    name: string;
    email: string;
    password: string;
    imagePath: string;
    rule: string;
    token: string;
  };
}
