import { Router } from "express";
import { createNote } from "./note.controller";

const router = Router();

router.post("/", createNote);

export default router;
