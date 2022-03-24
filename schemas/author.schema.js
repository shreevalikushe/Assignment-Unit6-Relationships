const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: false },
    books: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "books",
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Author = mongoose.model("author", authorSchema);

module.exports = Author;
