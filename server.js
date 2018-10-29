const express = require("express");
const cors = require("cors");
const multer = require("multer");

const PORT = process.env.PORT || 9000;
const app = express();

if (process.env.NODE_ENV !== "production") {
  const dotenv = require("dotenv").config();
}

app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})

// Error handling middleware
app.use((err, req, res, next) => {
  res.send(err.message);
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})