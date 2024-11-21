import express from "express";
import cors from "cors";
import mongoose, { model } from "mongoose";
import routerBooks from "./routes/book.js";
import routerAuthor from "./routes/author.js";
import routerCategory from "./routes/category.js";
import routerAuth from "./routes/auth.js";
import eventRoutes from "./routes/event.js";

const app = express();
app.use(cors());
app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/books")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/books", routerBooks);
app.use("/api/authors", routerAuthor);
app.use("/api/categories", routerCategory);
app.use("/api/auth", routerAuth);
app.use("/api/events", eventRoutes);


export default app;
