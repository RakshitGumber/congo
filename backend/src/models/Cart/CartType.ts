import type { ObjectId } from "mongoose";

export interface ICartType {
  _id: string;
  sessionId: ObjectId;
  productId: ObjectId;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}
