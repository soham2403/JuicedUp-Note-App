import mongoose from "mongoose";
import { MONGO_URI } from "../constants/env";

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, { dbName: "notedb" });
    console.log(`MongoDB connected successfully to: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`MongoDB connection failed:${error.message}`);
    process.exit(1);
  }
};
