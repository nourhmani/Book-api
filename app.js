import express from "express";
import cors from "cors";
import mongoose, { model } from "mongoose";
import routerBooks from "./routes/book.js";
const app = express();
app.use(cors());
app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/books", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/books", routerBooks);

export default app;
