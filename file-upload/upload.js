const express = require("express");
const router = express.Router();
const multer = require("multer");

let lastUpload = { fn: "", ln: "", files: [] };

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, __dirname + "/uploads");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const uploads = multer({ storage: storage });

router.post("/uploads", uploads.array("files"), (req, res) => {
  lastUpload = {
    fn: req.body.fn || "",
    ln: req.body.ln || "",
    files: req.files || [],
  };
  res.status(201).json({ message: "files received" });
});

router.get("/uploads", (req, res) => {
  res.render("upload", {
    fn: lastUpload.fn,
    ln: lastUpload.ln,
    files: lastUpload.files,
  });
});

module.exports = router;
