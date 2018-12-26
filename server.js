const express = require("express");
const cors = require("cors");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

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

app.post("/api/fileanalyse", upload.single("upfile"), (req, res, next) => {
  res.json({
    "name": req.file.originalname,
    "size": req.file.size
  })
})

// Error handling middleware
app.use((err, req, res, next) => {
  res.send(err.message);
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})