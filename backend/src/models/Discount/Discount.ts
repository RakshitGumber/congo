import { Schema, model } from "mongoose";
import type { IDiscount } from "./DiscountType";

const DiscountSchema = new Schema<IDiscount>({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  discountType: { type: String, required: true },
  discountValue: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date },
});

export const Discount = model<IDiscount>("Discount", DiscountSchema);
