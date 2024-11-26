import { Schema, model } from "mongoose";
import type { IOrderDetails } from "./OrderDetailsType";

const OrderDetailsSchema = new Schema<IOrderDetails>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  total: { type: Number, required: true },
  paymentId: {
    type: Schema.Types.ObjectId,
    ref: "PaymentDetails",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const OrderDetails = model<IOrderDetails>(
  "OrderDetails",
  OrderDetailsSchema
);
