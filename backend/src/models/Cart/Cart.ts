import { Schema, model } from "mongoose";
import type { ICartType } from "./CartType";

const CartSchema = new Schema<ICartType>({
  sessionId: { type: Schema.Types.ObjectId, ref: "Session", required: true },
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Cart = model<ICartType>("Cart", CartSchema);
