import { Schema, model } from "mongoose";
import type { IReview } from "./ReviewType";

const ReviewSchema = new Schema<IReview>({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date },
});

export const Review = model<IReview>("Review", ReviewSchema);
