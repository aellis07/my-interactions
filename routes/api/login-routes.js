const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Welcome to /api/login");
});

module.exports = router;
