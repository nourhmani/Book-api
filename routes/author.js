import express from "express";
import {
    fetchAuthors,
    createAuthor,
    getAuthorById
  } from "../controllers/author.js";
  const router = express.Router();
  
  //routes
  router.get("/", fetchAuthors);
  router.get("/:id", getAuthorById);
  router.post("/", createAuthor);
 
  
  export default router;