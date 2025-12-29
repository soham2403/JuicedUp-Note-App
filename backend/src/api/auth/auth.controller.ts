import { BAD_REQUEST, OK } from "../../constants/http";
import catchError from "../../utils/catchErrors";
import { email, z } from "zod";

const registerSchema = z
  .object({
    email: z.email().min(1).max(255),
    password: z.string().min(8).max(255),
    confirmPassword: z.string().min(8).max(255),
    userAgent: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Password does not match",
    path: ["confirmPassword"],
  });

export const registerController = catchError(async (req, res) => {
  // validate request
  const request = registerSchema.parse({
    ...req.body,
    userAgent: req.header("user-agent"),
  });
  // call service

  // return response
  res.status(201).json({ message: "User registered successfully" });
});

export const loginController = catchError(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(BAD_REQUEST).json({ message: "All fields are required" });
  }
  // Login logic here
  res.status(OK).json({ message: "User logged in successfully" });
});
