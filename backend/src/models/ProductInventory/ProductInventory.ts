import { Schema, model } from "mongoose";
import type { IProductInventory } from "./ProductInventoryType";

const ProductInventorySchema = new Schema<IProductInventory>({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date },
});

export const ProductInventory = model<IProductInventory>(
  "ProductInventory",
  ProductInventorySchema
);
