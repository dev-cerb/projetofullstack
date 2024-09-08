'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      user:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      user:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  }
};
