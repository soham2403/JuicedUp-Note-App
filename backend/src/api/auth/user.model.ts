import { Model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
  },
  { timestamps: true },
);

const User = new Model("User", userSchema);
export default User;
