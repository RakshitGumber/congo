import { Schema, model } from "mongoose";
import type { IUser } from "./UserType";

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  isEmailVerified: { type: Boolean, default: false },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String },
  address: [{ type: Schema.Types.ObjectId, ref: "UserAddress" }],
  paymentMethods: [{ type: Schema.Types.ObjectId, ref: "UserPayment" }],
  phoneNumber: { type: Number },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const User = model<IUser>("User", UserSchema);
