import type { ObjectId } from "mongoose";

export interface IPaymentDetails {
  _id: string;
  orderId: ObjectId;
  amount: number;
  provider: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
