const router = require("express").Router();

//  GET /cabinet
router.get("/", (req, res) => {
  res.render("cabinet");
});

module.exports = router;
