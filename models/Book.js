import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishedYear: {
    type: Number,
  },
  genre: {
    type: String,
  },
  description: {
    type: String,
  },
});

export default mongoose.model("Book", bookSchema);
