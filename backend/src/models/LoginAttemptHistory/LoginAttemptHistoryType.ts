import type { ObjectId } from "mongoose";

export interface ILoginAttemptHistory {
  _id: string;
  customerId: ObjectId;
  attemptTime: Date;
  success: boolean;
}
