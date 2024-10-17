import Book from "../models/Book.js";
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
router.post("/", createBook);
router.patch("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
