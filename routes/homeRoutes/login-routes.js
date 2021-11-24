const router = require("express").Router();

//  GET /login
router.get("/", (req, res) => {
  res.render("login");
});

module.exports = router;
