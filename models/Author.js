import mongoose from "mongoose";

const autherSchema = new mongoose.Schema({
  lastName: { type: String, required: true },
  firstName: { type: String, required: true },
  nationality: { type: String, required: true },
});

export default mongoose.model("Author", autherSchema);
