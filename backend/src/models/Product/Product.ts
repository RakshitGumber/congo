import { Schema, model } from "mongoose";
import type { IProduct } from "./ProductType";

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  desc: { type: String, required: true },
  SKU: { type: Number, required: true },
  categoryId: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  inventoryId: {
    type: Schema.Types.ObjectId,
    ref: "Inventory",
    required: true,
  },
  discountId: { type: Schema.Types.ObjectId, ref: "Discount" },
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Product = model<IProduct>("Product", ProductSchema);
