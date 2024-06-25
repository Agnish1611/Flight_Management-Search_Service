'use strict';

const { Enums } = require('../utils/common');
const { BUSINESS, PREMIUM_ECONOMY, FIRST_CLASS, ECONOMY } = Enums.SEAT_TYPE;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false, createdAt: new Date(), updatedAt: new Date() 
     * }], {});
    */
    await queryInterface.bulkInsert('Seats', [
      { airplaneId: 16, row: 1, col: 'A', type: BUSINESS, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 1, col: 'C', type: BUSINESS, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 1, col: 'D', type: BUSINESS, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 1, col: 'F', type: BUSINESS, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 2, col: 'A', type: BUSINESS, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 2, col: 'C', type: BUSINESS, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 2, col: 'D', type: BUSINESS, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 2, col: 'F', type: BUSINESS, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 3, col: 'A', type: BUSINESS, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 3, col: 'C', type: BUSINESS, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 3, col: 'D', type: BUSINESS, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 3, col: 'F', type: BUSINESS, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 4, col: 'A', type: BUSINESS, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 4, col: 'C', type: BUSINESS, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 4, col: 'D', type: BUSINESS, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 4, col: 'F', type: BUSINESS, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 5, col: 'A', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 5, col: 'B', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 5, col: 'C', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 5, col: 'D', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 5, col: 'E', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 5, col: 'F', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 6, col: 'A', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 6, col: 'B', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 6, col: 'C', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 6, col: 'D', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 6, col: 'E', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 6, col: 'F', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 7, col: 'A', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 7, col: 'B', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 7, col: 'C', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 7, col: 'D', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 7, col: 'E', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 7, col: 'F', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 8, col: 'B', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 8, col: 'C', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 8, col: 'D', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 8, col: 'E', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 9, col: 'A', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 9, col: 'B', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 9, col: 'C', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 9, col: 'D', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 9, col: 'E', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 9, col: 'F', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 10, col: 'A', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 10, col: 'B', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 10, col: 'C', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 10, col: 'D', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 10, col: 'E', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 10, col: 'F', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 11, col: 'A', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 11, col: 'B', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 11, col: 'C', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 11, col: 'D', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 11, col: 'E', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 11, col: 'F', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 12, col: 'A', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 12, col: 'B', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 12, col: 'C', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 12, col: 'D', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 12, col: 'E', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 12, col: 'F', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 13, col: 'A', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 13, col: 'B', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 13, col: 'C', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 13, col: 'D', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 13, col: 'E', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 13, col: 'F', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 14, col: 'A', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 14, col: 'B', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 14, col: 'C', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 14, col: 'D', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 14, col: 'E', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 14, col: 'F', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 15, col: 'A', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 15, col: 'B', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 15, col: 'C', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 15, col: 'D', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 15, col: 'E', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 15, col: 'F', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 16, col: 'A', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 16, col: 'B', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 16, col: 'C', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 16, col: 'D', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 16, col: 'E', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 16, col: 'F', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 17, col: 'A', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 17, col: 'B', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 17, col: 'C', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 17, col: 'D', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 17, col: 'E', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 17, col: 'F', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 18, col: 'A', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 18, col: 'B', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 18, col: 'C', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 18, col: 'D', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 18, col: 'E', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 18, col: 'F', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 19, col: 'A', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 19, col: 'B', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 19, col: 'C', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 19, col: 'D', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 19, col: 'E', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 19, col: 'F', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 20, col: 'A', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 20, col: 'B', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 20, col: 'C', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 20, col: 'D', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 20, col: 'E', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 20, col: 'F', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 21, col: 'B', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 21, col: 'C', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 21, col: 'D', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 21, col: 'E', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 22, col: 'A', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 22, col: 'B', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 22, col: 'C', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 22, col: 'D', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 22, col: 'E', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 22, col: 'F', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 23, col: 'A', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 23, col: 'B', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 23, col: 'C', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 23, col: 'D', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 23, col: 'E', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 23, col: 'F', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 24, col: 'A', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 24, col: 'B', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 24, col: 'C', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 24, col: 'D', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 24, col: 'E', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 24, col: 'F', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 25, col: 'A', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 25, col: 'B', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 25, col: 'C', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 25, col: 'D', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 25, col: 'E', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 25, col: 'F', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 26, col: 'A', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 26, col: 'B', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 26, col: 'C', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 26, col: 'D', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 26, col: 'E', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 26, col: 'F', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 27, col: 'A', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 27, col: 'B', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 27, col: 'C', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 27, col: 'D', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 27, col: 'E', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 27, col: 'F', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 28, col: 'A', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 28, col: 'B', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 28, col: 'C', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 28, col: 'D', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 28, col: 'E', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 28, col: 'F', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 29, col: 'A', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 29, col: 'B', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 29, col: 'C', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 29, col: 'D', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 29, col: 'E', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 29, col: 'F', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 30, col: 'A', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 30, col: 'B', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 30, col: 'C', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 30, col: 'D', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 30, col: 'E', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 30, col: 'F', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 31, col: 'A', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 31, col: 'B', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 31, col: 'C', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 31, col: 'D', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 31, col: 'E', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 31, col: 'F', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 32, col: 'A', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 32, col: 'B', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 32, col: 'C', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 32, col: 'D', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 32, col: 'E', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
      ,
      { airplaneId: 16, row: 32, col: 'F', type: ECONOMY, occupied: false, createdAt: new Date(), updatedAt: new Date()  }
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
