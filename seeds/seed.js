const sequelize = require("../config/connection");
const { User } = require("../models");
const { Drug } = require("../models");

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
