export interface ILogedUserInfo {
  user: {
    _id: string
    name: string;
    email: string;
    password: string;
    imagePath: string;
    rule: string;
    verificationToken: string;
  };
}
