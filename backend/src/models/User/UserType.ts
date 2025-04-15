import type { ObjectId } from "mongoose";

export interface IUser {
  _id: string;
  username: string;
  email: string;
  isEmailVerified: boolean;
  password: string;
  firstName: string;
  address: ObjectId[];
  paymentMethods: ObjectId[];
  lastName: string;
  phoneNumber: number;
  createdAt: Date;
  updatedAt: Date;
}
