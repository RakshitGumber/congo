import { Schema, model } from "mongoose";
import type { IUserPayment } from "./UserPaymentType";

const UserPaymentSchema = new Schema<IUserPayment>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  paymentType: { type: String, required: true },
  provider: { type: String, required: true },
  accountNumber: { type: String, required: true },
  expiry: { type: Date, required: true },
});

export const UserPayment = model<IUserPayment>(
  "UserPayment",
  UserPaymentSchema
);
