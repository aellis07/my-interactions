const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.get((req, res) => {
  res.send("Welcome to /api, you probably meant to go to another endpoint");
});

module.exports = router;
