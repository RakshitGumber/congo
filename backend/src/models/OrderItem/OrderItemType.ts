import { type ObjectId } from "mongoose";

export type IOrderItemType = {
  _id: string;
  productId: ObjectId;
  orderId: ObjectId;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
};
