const router = require("express").Router();
const User = require("../../models/User");

// Get login page
router.get("/", async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login to Account
router.post("/", async (req, res) => {
  try {
    const dbUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUser) {
      res.redirect("login");
      console.log(
        "Incorrect email or password. Please try again or create an account!"
      );
      return;
    }

    const validPassword = await dbUser.checkPassword(req.body.password);

    if (!validPassword) {
      res.redirect("login");
      // res.status(400).json({
      //   message:
      //     "Incorrect email or password. Please try again or create an account!",
      // });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      res.redirect("dashboard");
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
});

// Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// CREATE new user
router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
