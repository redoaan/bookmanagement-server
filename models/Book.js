import mongoose from "mongoose";

// Defining Schema
const BookSchema = new mongoose.Schema({
  bookname: { type: String, required: true, trim: true },
  pubname: { type: String, required: true, trim: true },
  ageofpub: { type: Number, required: true, trim: true },
  pagenoumofbook: { type: Number, required: true, trim: true },
  publishdate: { type: String, required: true, trim: true },
});

// Model
const BookModel = mongoose.model("book", BookSchema);

export default BookModel;
