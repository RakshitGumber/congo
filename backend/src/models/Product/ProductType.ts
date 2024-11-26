import type { ObjectId } from "mongoose";

export interface IProduct {
  _id: string;
  name: string;
  desc: string;
  SKU: number;
  price: number;
  image: string;
  categoryId: ObjectId;
  inventoryId: ObjectId;
  discountId: ObjectId;
  reviews: ObjectId[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
