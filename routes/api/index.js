const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Welcome to /api, you probably meant to go to another endpoint");
});

module.exports = router;
