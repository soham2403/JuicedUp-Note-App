import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(
    `PATH: ${req.path}\nERROR: ${err.message}\nSTACK: ${err.stack}`
  );
  res.status(500).json({
    message: err.message || "Internal Server Error",
  });
};
export default errorHandler;
