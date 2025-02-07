const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ssg_linebot', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql', 
  });

module.exports = sequelize;