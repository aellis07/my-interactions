const router = require("express").Router();
const cabinetRoutes = require("./cabinet-routes");
const dashboardRoutes = require("./dashboard-routes");
const loginRoutes = require("./login-routes");

router.use("/cabinet", cabinetRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/login", loginRoutes);

module.exports = router;
