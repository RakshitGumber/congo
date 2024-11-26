import type { ObjectId } from "mongoose";

export interface IOrderDetails {
  _id: string;
  userId: ObjectId;
  total: number;
  paymentId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
