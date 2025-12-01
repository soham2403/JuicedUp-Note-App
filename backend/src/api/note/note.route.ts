import { Router } from "express";
import {
  createNote,
  deleteNoteById,
  fetchAllNotes,
  fetchNoteById,
  updateNoteById,
} from "./note.controller";

const noteRoute = Router();

noteRoute.post("/", createNote);
noteRoute.get("/", fetchAllNotes);
noteRoute.get("/:id", fetchNoteById);
noteRoute.delete("/:id", deleteNoteById);
noteRoute.put("/:id", updateNoteById);

export default noteRoute;
