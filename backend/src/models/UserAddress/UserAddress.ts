import { Schema, model } from "mongoose";
import type { IUserAddress } from "./UserAddressType";

const UserAddressSchema = new Schema<IUserAddress>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  alias: { type: String, required: true },
  addressLine1: { type: String, required: true },
  addressLine2: { type: String },
  city: { type: String, required: true },
  country: { type: String, required: true },
  phone: { type: Number, required: true },
  alternativePhone: { type: Number },
  postalCode: { type: String, required: true },
  isDefault: { type: Boolean, default: false },
});

export const UserAddress = model<IUserAddress>(
  "UserAddress",
  UserAddressSchema
);
