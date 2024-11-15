// models/Category.js
import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    enum: ["Horror", "Mystery", "Science Fiction", "Romance", "Fantasy"],
    required: true,
  },
});

const Category = mongoose.model("Category", categorySchema);
export default Category;
