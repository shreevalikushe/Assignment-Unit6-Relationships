const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    body: { type: String, required: false },
    checkedOut: { type: Boolean, required: true, default: false },
    section: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "section",
    },
    authors: [
      { type: mongoose.Schema.Types.ObjectId, required: true, ref: "author" },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
