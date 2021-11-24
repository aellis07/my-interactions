const sequelize = require("../config/connection.js");
const User = require("../models/User");
const Drug = require("../models/Drugs");

const userData = require("./userData.json");
const drugData = require("./drugData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  Drug.bulkCreate(drugData, { returning: true });
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
