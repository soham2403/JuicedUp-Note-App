import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { connectDb } from "./config/db";
import notesRoute from "./api/note/note.route";
import errorHandler from "./middleware/errorHandler";
import { CORS_ORIGIN, PORT, NODE_ENV } from "./constants/env";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: CORS_ORIGIN, // frontend URL
    credentials: true, // if you send cookies or auth
  })
);
app.use(cookieParser());

app.use("/api/v1/note", notesRoute);

app.get("/health", async (req: Request, res: Response, next: NextFunction) => {
  try {
    throw new Error("Test error for Sentry");
  } catch (error) {
    next(error);
  }
  res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
});

app.use(errorHandler);

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Server is running on http://localhost:${PORT} in ${NODE_ENV} mode`
      );
    });
  })
  .catch((error) => {
    console.error("failed to connect to database", error.message);
  });
