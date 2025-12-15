const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

mongoose.connect("mongodb://mongo:27017/librarydb")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error(err));

const Book = mongoose.model("Book", {
  title: String,
  author: String
});

app.get("/", async (req, res) => {
  await Book.create({ title: "DevOps Basics", author: "Jenkins Lab" });
  res.send("Library Web App is running successfully 📚");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
