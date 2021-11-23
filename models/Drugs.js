const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Drug extends Model {}

Drug.init(
    {
        drug_name: {
            type: DataTypes.STRING,
        },
        drug_id: {
            type: DataTypes.INTEGER,
        },
    },
    { sequelize, timestamps: false, underscored: false, modelName: "drug" }
);
