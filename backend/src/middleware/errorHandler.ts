import { ErrorRequestHandler, Response } from "express";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constants/http";
import { z } from "zod";

function handleZodError(res: Response, error: z.ZodError): unknown {
  const errors = error.issues.map((err) => ({
    path: err.path.join("."),
    message: err.message,
  }));
  return res.status(BAD_REQUEST).json({
    message: error.message,
    errors,
  });
}

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  console.error(
    `PATH: ${req.path}\nERROR: ${error.message}\nSTACK: ${error.stack}`
  );
  if (error instanceof z.ZodError) {
    return handleZodError(res, error);
  }
  res.status(INTERNAL_SERVER_ERROR).send("Internal Server Error");
};
export default errorHandler;
