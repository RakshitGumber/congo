import type { ObjectId } from "mongoose";

export interface IUserAddress {
  _id: string;
  userId: ObjectId;
  alias: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  country: string;
  phone: number;
  alternativePhone: number;
  postalCode: string;
  isDefault: boolean;
}
