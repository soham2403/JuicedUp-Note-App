import { Schema, model } from "mongoose";

export interface INote extends Document {
  title: string;
  description: string;
}

const noteSchema = new Schema<INote>(
  {
    title: {
      type: String,
      required: [true, "title is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
  },
  { timestamps: true }
);

const Note = model("Note", noteSchema);
export default Note;
