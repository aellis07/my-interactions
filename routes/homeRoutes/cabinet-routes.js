const router = require("express").Router();
const withAuth = require("../../utils/auth");

// //  GET /cabinet
// router.get("/", (req, res) => {
//   res.render("cabinet");
// });

router.get("/", withAuth, async (req, res) => {
  try {
    res.render("cabinet");
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
