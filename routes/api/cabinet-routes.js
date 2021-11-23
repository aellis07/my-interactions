const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Welcome to /api/cabinet");
});

module.exports = router;
