import { Router } from "express";
import {
  createNote,
  deleteNoteById,
  fetchAllNotes,
  fetchNoteById,
  updateNoteById,
} from "./note.controller";

const router = Router();

router.post("/", createNote);
router.get("/", fetchAllNotes);
router.get("/:id", fetchNoteById);
router.delete("/:id", deleteNoteById);
router.put("/:id", updateNoteById);

export default router;
