import { Request, Response, NextFunction } from "express";
import Note from "./note.model";

const createNote = async (req: Request, res: Response) => {
  try {
    const note = await Note.create(req.body);
    return res.status(201).json(note);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

const updateNoteById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const note = await Note.findByIdAndUpdate(id, req.body, { new: true });
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    return res.status(200).json(note);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

const deleteNoteById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const note = await Note.findByIdAndDelete(id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    return res.status(200).json(note);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

const fetchNoteById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    return res.status(200).json(note);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

const fetchAllNotes = async (req: Request, res: Response) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export {
  createNote,
  updateNoteById,
  deleteNoteById,
  fetchAllNotes,
  fetchNoteById,
};
