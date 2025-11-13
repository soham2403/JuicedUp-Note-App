import { Schema, model } from "mongoose";

interface INote extends Document {}

const noteSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Note = model("Note", noteSchema);
export default Note;
