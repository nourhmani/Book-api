import express from "express";
import { fetchCategories ,
    createCategory,
    getCategoryById
} from "../controllers/category.js";

const router = express.Router();
//routes
router.get("/", fetchCategories);
router.get("/:id", getCategoryById);
router.post("/", createCategory);

export default router;