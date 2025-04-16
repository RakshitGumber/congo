import { connect } from "mongoose";

const connectDB = async () => {
  try {
    if (process.env.MONGO_URI === undefined)
      throw new Error("Missing MONGO_URI environment variable");

    connect(process.env.MONGO_URI);
  } catch (error: Error | any) {
    console.log(error.message, "Error from db.ts");
    process.exit(1);
  }
};

export default connectDB;
