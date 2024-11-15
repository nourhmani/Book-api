import Category from "../models/Category.js";
export const fetchCategories = async (req, res) => {
    try {
      const categories = await Category.find();
      res.status(200).json({ model: categories, message: "success" });
    } catch (error) {
      res
        .status(400)
        .json({ error: error.message, message: "failed : categories not found" });
      console.log(error);
    }
}
export const createCategory = async (req, res) => {
    try {
      const category = new Category(req.body);
      await category.save();
      res.status(201).json({ model: category, message: "success" });
    } catch (error) {
      res
        .status(400)
        .json({ error: error.message, message: "failed : category not created" });
      console.log(error);
    }
}

export const getCategoryById = async (req, res) => {
    try {
      const category = await Category.findOne({ _id: req.params.id });
      res.status(200).json({ model: category, message: "success" });
    } catch (error) {
      res
        .status(400)
        .json({ error: error.message, message: "failed : category not found" });
      console.log(error);
    }
}
