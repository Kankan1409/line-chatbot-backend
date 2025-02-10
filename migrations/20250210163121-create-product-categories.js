'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('product_categories', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      categories: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW, 
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW, 
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('product_categories');
  }
};
