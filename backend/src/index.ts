import express, { Request } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDb } from "./utils/db";
import notesRoute from "./api/note/note.route";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173", // frontend URL
    credentials: true, // if you send cookies or auth
  })
);

app.use("/api/v1/note", notesRoute);

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("failed to connect to database", error.message);
  });
