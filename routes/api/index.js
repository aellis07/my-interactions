const router = require("express").Router();
const newUserRoutes = require("./newUser-routes");

// const sequelize = require("../config/connection");


router.use("/", newUserRoutes);

// router.get("/", (req, res) => {
//   res.send("Welcome to /api, you probably meant to go to another endpoint");
// });

module.exports = router;
