export interface IUser {
  name: string;
  email: string;
  password: string;
  imagePath: string;
  rule: string;
}

export interface IFullUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  imagePath: string;
  rule: string;
  verificationToken: string;
}
