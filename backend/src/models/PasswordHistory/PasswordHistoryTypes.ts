import type { ObjectId } from "mongoose";

export interface IPasswordHistory {
  _id: string;
  customerId: ObjectId;
  passwordHash: string;
  retiredAt: Date;
}
