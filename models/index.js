const User = require("./User");
const Drug = require("./Drugs");

User.hasMany(Drug, {
  foreignKey: "drug_id",
  onDelete: "CASCADE",
});

Drug.belongsTo(User, {
  foreignKey: "drug_id",
});

module.exports = { User, Drug };
