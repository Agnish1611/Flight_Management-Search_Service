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
    await queryInterface.bulkInsert('Flights', [
      {
        flightNumber: 'AI 676',
        airplaneId: 3,
        airlineId: 1,
        departureAirportId: 4,
        arrivalAirportId: 1,
        arrivalTime: new Date("2024-07-02T12:30:00+05:30"),
        departureTime: new Date("2024-07-02T09:45:00+05:30"),
        price: 5750,
        totalSeats: 180,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        flightNumber: 'UK 772',
        airplaneId: 3,
        airlineId: 6,
        departureAirportId: 4,
        arrivalAirportId: 1,
        arrivalTime: new Date("2024-07-02T12:55:00+05:30"),
        departureTime: new Date("2024-07-02T10:15:00+05:30"),
        price: 5865,
        totalSeats: 180,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        flightNumber: 'SG 105',
        airplaneId: 4,
        airlineId: 7,
        departureAirportId: 13,
        arrivalAirportId: 3,
        arrivalTime: new Date("2024-07-04T08:05:00+05:30"),
        departureTime: new Date("2024-07-04T05:00:00+05:30"),
        price: 5765,
        totalSeats: 260,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        flightNumber: '6E 2287',
        airplaneId: 3,
        airlineId: 5,
        departureAirportId: 13,
        arrivalAirportId: 3,
        arrivalTime: new Date("2024-07-04T20:05:00+05:30"),
        departureTime: new Date("2024-07-04T17:15:00+05:30"),
        price: 5750,
        totalSeats: 180,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        flightNumber: 'AI 762',
        airplaneId: 3,
        airlineId: 1,
        departureAirportId: 13,
        arrivalAirportId: 4,
        arrivalTime: new Date("2024-07-11T23:25:00+05:30"),
        departureTime: new Date("2024-07-11T21:10:00+05:30"),
        price: 5620,
        totalSeats: 180,
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
