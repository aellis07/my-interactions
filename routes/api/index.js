const router = require("express").Router();
const loginRoutes = require("./login-routes.js");
const dashboardRoutes = require("./dashboard-routes.js");
const cabinetRoutes = require("./cabinet-routes.js");

router.use("/login", loginRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/cabinet", cabinetRoutes);

module.exports = router;
