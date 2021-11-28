const router = require("express").Router();
const userRoutes = require("./userRoutes");
const drugRoutes = require("./drugRoutes");

router.use("/users", userRoutes);
router.use("/drugs", drugRoutes);

module.exports = router;
