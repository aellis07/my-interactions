const router = require("express").Router();
const User = require("../../models/User");

// api/new/

// Get new users
router.get("/", (req, res) => {
  //   const users = User.findAll();
  res.send("welcome to api/new");
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
