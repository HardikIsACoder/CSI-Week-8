const express = require("express");
const router = express.Router();

router.get("/joke", async (req, res, next) => {
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const joke = await response.json();
    res.render("joke", { setup: joke.setup, punchline: joke.punchline });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
