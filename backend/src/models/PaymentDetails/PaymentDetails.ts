import { Schema, model } from "mongoose";
import type { IPaymentDetails } from "./PaymentDetailsType";

const PaymentDetailsSchema = new Schema<IPaymentDetails>({
  orderId: { type: Schema.Types.ObjectId, ref: "OrderDetails", required: true },
  amount: { type: Number, required: true },
  provider: { type: String, required: true },
  status: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const PaymentDetails = model<IPaymentDetails>(
  "PaymentDetails",
  PaymentDetailsSchema
);
