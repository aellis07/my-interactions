const router = require("express").Router();
const newUserRoutes = require("./newUser-routes");

router.use("/new", newUserRoutes);

router.get("/", (req, res) => {
  res.send("Welcome to /api, you probably meant to go to another endpoint");
});

module.exports = router;
