import type { ObjectId } from "mongoose";

export interface IReview {
  _id: string;
  productId: ObjectId;
  userId: ObjectId;
  rating: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
