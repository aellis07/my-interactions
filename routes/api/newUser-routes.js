const router = require("express").Router();
const User = require("../../models/User");

// api/new/

// Get new users
router.get("/", async (req, res) => {
  try {
    // Get all users, sorted by name
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });

    // Serialize user data so templates can read it
    const users = userData.map((project) => project.get({ plain: true }));

    // Pass serialized data into Handlebars.js template
    res.render("homepage", { users });
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE new user
router.post("/", async (req, res) => {
  try {
    const newUserData = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(newUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
