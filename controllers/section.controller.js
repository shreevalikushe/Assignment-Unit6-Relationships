const express = require("express");
const Section = require("../schemas/section.schema");
const router = express.Router();

router.get("/", async (req, res) => {
  const sections = await Section.find({});
  res.send(sections);
});

router.post("/", async (req, res) => {
  const section = await Section.create(req.body);
  res.status(201).send(section);
});

router.delete("/:id", async (req, res) => {
  const deleteSection = await Section.findOneAndDelete(req.params.id);
  res.send(deleteSection);
});
module.exports = router;
