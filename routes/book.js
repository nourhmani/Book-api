import Book from "../models/Book.js";
import { validateBook } from "../middlewares/validateBook.js";

import express from "express";
import {
  fetchBooks,
  createBook,
  deleteBook,
  updateBook,
  getBook,
} from "../controllers/book.js";
const router = express.Router();
//routes
router.get("/", fetchBooks);
router.get("/:id", getBook);
router.post("/", validateBook, createBook);
router.patch("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
