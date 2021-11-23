const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Drug extends Model {}

Drug.init({});
