const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Welcome to /api/dashboard");
});

module.exports = router;
