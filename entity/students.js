const Sequelize = require("sequelize");
const sequelize = require("../config/dataBase");
const mark = require("../entity/marks");

const student= sequelize.define(
  "Students",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

student.hasOne(mark,{foreignKey:"stuId",allowNull:false})
mark.belongsTo(student,{foreignKey:"stuId",allowNull:false})

module.exports = student