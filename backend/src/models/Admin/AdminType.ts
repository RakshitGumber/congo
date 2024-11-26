export interface IAdmin {
  _id: string;
  username: string;
  passwordHashed: string;
  firstName: string;
  lastName: string;
  permissions: string[];
  adminType: string;
  lastLoggedIn: Date;
  createdAt: Date;
  updatedAt: Date;
}
