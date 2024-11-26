import type { ObjectId } from "mongoose";

export interface IProductInventory {
  _id: string;
  productId: ObjectId;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
