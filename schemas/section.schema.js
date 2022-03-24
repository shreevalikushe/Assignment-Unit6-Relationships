const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    books: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "book",
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Section = mongoose.model("section", sectionSchema);

module.exports = Section;
