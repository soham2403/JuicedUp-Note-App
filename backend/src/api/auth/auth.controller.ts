import catchError from "../../utils/catchErrors";

export const registerController = catchError(async (req, res) => {
  // validate  request
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  // call service

  // return response
  res.status(201).json({ message: "User registered successfully" });
});

export const loginController = catchError(async (req, res) => {
  // Login logic here
  res.status(200).json({ message: "User logged in successfully" });
});
