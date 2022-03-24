const express = require("express");
const mongoose = require("mongoose");
const bookController = require("./controllers/book.controller");
const sectionController = require("./controllers/section.controller");
const authorController = require("./controllers/author.controller");
const app = express();
app.use(express.json());

require("dotenv").config();
const connect = () => {
  return mongoose.connect(process.env.MONGOOSE_URL);
};

app.use("/books", bookController);
app.use("/sections", sectionController);
app.use("/authors", authorController);

app.listen(3021, async (req, res) => {
  await connect();
  console.log("Listening on port 3021");
});
