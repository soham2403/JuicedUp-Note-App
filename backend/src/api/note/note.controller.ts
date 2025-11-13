import { Request, Response, NextFunction } from "express";

const createNote = async (req: Request, res: Response, next: NextFunction) => {
  const { title, description } = req.body;
  console.log("Note Created");
  return res.json({ message: "Created note" });
};
const updateNote = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
const deleteNote = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
const fetchNoteById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
const fetchAllNotes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export { createNote, updateNote, deleteNote, fetchAllNotes, fetchNoteById };
