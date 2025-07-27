const express = require("express");
const path = require("path");
const uploadRouter = require("./file-upload/upload");
const apiRouter = require("./api/joke");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use((err, req, res, next) => {
  if (err != null) {
    console.error(err.message);
    res.status(500).json({ error: "Something went wrong!" });
  }
  next();
});

app.use("/", uploadRouter);

app.use("/", apiRouter);

app.listen(3000, () => console.log("Server running on port 3000"));
