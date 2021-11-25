const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { User } = require("../../models");

// router.get("/", withAuth, async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ["password"] },
//       order: [["name", "ASC"]],
//     });

//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render("dashboard", {
//       users,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/", (req, res) => {
  // if (req.session.logged_in) {
  //   res.redirect("/login");
  //   return;
  // }

  res.render("dashboard");
});

module.exports = router;
