import { Schema, model } from "mongoose";
import type { IOrderItemType } from "./OrderItemType";

const OrderItemSchema = new Schema<IOrderItemType>({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  orderId: { type: Schema.Types.ObjectId, ref: "OrderDetails", required: true },
  quantity: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date },
});

export const OrderItem = model<IOrderItemType>("OrderItem", OrderItemSchema);
