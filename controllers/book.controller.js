const express = require("express");
const Book = require("../schemas/book.schema");
const router = express.Router();

router.get("/", async (req, res) => {
  const { checkedOut } = req.query;
  if (checkedOut) {
    const books = await Book.find({ checkedOut: checkedOut })
      .populate("section")
      .populate("authors");

    return res.send(books);
  } else {
    const books = await Book.find().populate({ path: "authors" });

    return res.send(books);
  }
});
router.get("/section/:id", async (req, res) => {
  const section = await Book.find({ section: req.params.id })
    .populate("authors")
    .populate("section");
  res.send(section);
});
router.get("/author/:id", async (req, res) => {
  const author = await Book.find({ authors: req.params.id })
    .populate("section")
    .populate("authors");
  res.send(author);
});

router.post("/", async (req, res) => {
  const book = await Book.create(req.body);
  res.status(201).send(book);
});
router.delete("/:id", async (req, res) => {
  const deleteBook = await Book.findOneAndDelete(req.params.id);
  res.send(deleteBook);
});
module.exports = router;
