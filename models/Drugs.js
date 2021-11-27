const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Drug extends Model {}

Drug.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    drug_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    drug_id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "drug",
  }
);
module.exports = Drug;
