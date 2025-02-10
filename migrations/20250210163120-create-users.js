'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      user_id: {
        type: Sequelize.STRING(250),
        allowNull: false
      },
      display_name: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      picture_url: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      is_active: {
        type: Sequelize.INTEGER,
        defaultValue: 1
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
    await queryInterface.dropTable('users');
  }
};
