import type { ObjectId } from "mongoose";

export interface ICustomerLogin {
  _id: string;
  customerId: ObjectId;
  passwordHash: string;
  lockedOut: boolean;
}
