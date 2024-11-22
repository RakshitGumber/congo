import type { ObjectId } from "mongoose";

export interface IProduct {
  _id: string;
  name: string;
  sku: string;
  description: string;
  price: number;
  categoryId: ObjectId;
}
