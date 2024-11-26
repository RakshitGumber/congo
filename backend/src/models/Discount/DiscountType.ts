import type { ObjectId } from "mongoose";

export interface IDiscount {
  id: string;
  name: string;
  desc: string;
  productId: ObjectId;
  discountType: string;
  discountValue: number;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
