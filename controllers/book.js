import Book from "../models/Book.js";

export const fetchBooks = async (req, res) => {
  const books = await Book.find();
  res.status(200).json({ model: books, message: "success" });
};

export const createBook = async (req, res) => {
  console.log("req", req.body);
  const book = new Book(req.body);
  await book.save();
  res.status(201).json({ model: book, message: "success" });
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
  console.log("id", req.params.id);
  const book = await Book.findOne({ _id: req.params.id });
  res.status(200).json({ model: book, message: "success" });
};
