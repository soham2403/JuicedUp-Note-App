import { ErrorRequestHandler } from "express";
import { INTERNAL_SERVER_ERROR } from "../constants/http";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(
    `PATH: ${req.path}\nERROR: ${err.message}\nSTACK: ${err.stack}`
  );
  res.status(INTERNAL_SERVER_ERROR).send("Internal Server Error");
};
export default errorHandler;
