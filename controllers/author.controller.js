const express = require("express");
const Author = require("../schemas/author.schema");
const router = express.Router();

router.get("/", async (req, res) => {
  const authors = await Author.find();
  res.send(authors);
});

router.post("/", async (req, res) => {
  const author = await Author.create(req.body);
  res.status(201).send(author);
});

router.patch("/:id", async (req, res) => {
  const updatedAuthor = await Author.findByIdAndUpdate(req.body);
  res.send(updatedAuthor);
});

router.delete("/:id", async (req, res) => {
  const deleteAuthor = await Author.findByIdAndDelete(req.params.id);
  res.status(200).send(deleteAuthor);
});
module.exports = router;
