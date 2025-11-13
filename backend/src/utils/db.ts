import mongoose from "mongoose";

export const connectDb = async () => {
  const MONGO_URI = process.env.MONGO_URI;
  if (!MONGO_URI) {
    throw new Error("MONGO_URI is not defined in environment variable");
  }
  try {
    const conn = await mongoose.connect(MONGO_URI, { dbName: "notedb" });
    console.log(`MongoDB connected successfully to: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`MongoDB connection failed:${error.message}`);
    process.exit(1);
  }
};
