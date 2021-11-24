const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Drug extends Model {}

Drug.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        drug_name: {
            type: DataTypes.STRING,
        },
        drug_id: {
            type: DataTypes.INTEGER,
            unique: true,
        },
    },
    { sequelize, timestamps: false, underscored: false, modelName: "drug" }
);
module.exports = Drug;
