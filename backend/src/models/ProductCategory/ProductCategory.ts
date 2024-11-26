import { Schema, model } from "mongoose";
import type { IProductCategory } from "./ProductCategoryType";

const ProductCategorySchema = new Schema<IProductCategory>({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date },
});

export const ProductCategory = model<IProductCategory>(
  "ProductCategory",
  ProductCategorySchema
);
