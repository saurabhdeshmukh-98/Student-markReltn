const Sequelize = require("sequelize");
const sequelize = new Sequelize("task5", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    min: 0,
    max: 5,
    acquire: 30000,
    idle: 10000,
  },
});
module.exports=sequelize