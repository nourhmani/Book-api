import Book from "../models/Book.js";
import Author from "../models/Author.js";

export const fetchBooks = async (req, res) => {
  const books = await Book.find().populate("author").populate("categories");
  res.status(200).json({ model: books, message: "success" });
};

export const createBook = async (req, res) => {
  try {
    const { author } = req.body;

    const existingBooks = await Book.find({ author });

    if (existingBooks.length === 0) {
      return res
        .status(400)
        .json({ message: "Author must have at least one other book." });
    }

    const book = new Book(req.body);
    await book.save();
    res.status(201).json({ model: book, message: "success" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteBook = async (req, res) => {
  console.log("req", req.body);
  await Book.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: "success" });
};
export const updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  });
  res.status(200).json({ model: book, message: "success" });
  console.log("req", req.body);
};

export const getBook = async (req, res) => {
  try {
    const book = await Book.findOne({ _id: req.params.id })
      .populate("author")
      .populate("categories");

    if (!book) return res.status(404).json({ message: "Book not found" });

    res.status(200).json({ model: book, message: "success" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
