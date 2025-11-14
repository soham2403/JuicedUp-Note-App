import { Schema, model } from "mongoose";

export interface INote extends Document {
  title: string;
  description: string;
}

const noteSchema = new Schema<INote>(
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
