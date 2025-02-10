'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('product_types', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      typeName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      remaining: {
        type: Sequelize.INTEGER,
        allowNull: true
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
    await queryInterface.dropTable('product_types');
  }
};
