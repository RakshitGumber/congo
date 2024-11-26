import type { ObjectId } from "mongoose";

export interface IUserPayment {
  _id: string;
  userId: ObjectId;
  paymentType: string;
  provider: string;
  accountNumber: string;
  expiry: Date;
}
