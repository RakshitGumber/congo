import { Schema, model } from "mongoose";
import type { IShoppingSession } from "./ShoppingSessionType";

const ShoppingSessionSchema = new Schema<IShoppingSession>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  total: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date },
});
