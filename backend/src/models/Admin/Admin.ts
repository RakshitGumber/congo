import { Schema, model } from "mongoose";
import type { IAdmin } from "./AdminType";

const AdminSchema = new Schema<IAdmin>({
  username: { type: String, required: true },
  passwordHashed: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  permissions: { type: [String], required: true },
  adminType: { type: String, required: true },
  lastLoggedIn: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Admin = model<IAdmin>("Admin", AdminSchema);
