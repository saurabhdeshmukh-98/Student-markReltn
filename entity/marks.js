const Sequelize = require("sequelize");
const sequelize = require("../config/dataBase");
const student=require('../entity/students')
const mark = sequelize.define(
  "Marks",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true,
    },
    marks1: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    marks2: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
module.exports = mark;
