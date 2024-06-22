'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airlines', [
      {
        name: 'Air India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Air India Express',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'AIX Connect',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Akasa Air',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'IndiGo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vistara',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'SpiceJet',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
