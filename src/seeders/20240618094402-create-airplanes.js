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

    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNo: 'Airbus A220-100',
        capacity: 135,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNo: 'Airbus A220-300',
        capacity: 160,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNo: 'Airbus A320',
        capacity: 180,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNo: 'Airbus A330-200',
        capacity: 260,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNo: 'Airbus A330-300',
        capacity: 290,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNo: 'Airbus A330-800',
        capacity: 260,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNo: 'Airbus A330-900',
        capacity: 300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNo: 'Airbus A350-900',
        capacity: 315,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNo: 'Airbus A350-1000',
        capacity: 369,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNo: 'Boeing 737-7',
        capacity: 172,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNo: 'Boeing 737-9',
        capacity: 220,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNo: 'Boeing 767',
        capacity: 375,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNo: 'Boeing 777',
        capacity: 368,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNo: 'Boeing 787-8',
        capacity: 248,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNo: 'Boeing 787-9',
        capacity: 294,
        createdAt: new Date(),
        updatedAt: new Date()
      }
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
