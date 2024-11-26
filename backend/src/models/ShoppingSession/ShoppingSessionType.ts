import type { ObjectId } from "mongoose";

export interface IShoppingSession {
  _id: string;
  userId: ObjectId;
  total: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
