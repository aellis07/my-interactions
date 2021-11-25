const router = require("express").Router();
const withAuth = require("../../utils/auth");
// const { User } = require("../../models");

router.get("/", withAuth, async (req, res) => {
  try {
    res.render("dashboard");
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// I think this is repetitive.
// router.get("/", (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect("/login");
//     return;
//   }

//   res.render("dashboard");
// });

module.exports = router;
