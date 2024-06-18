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
    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Chhatrapati Shivaji International Airport',
        code: 'BOM',
        address: 'Mumbai, Maharashtra, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kempegowda International Airport',
        code: 'BLR',
        address: 'Bangalore, Karnataka, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chennai International Airport',
        code: 'MAA',
        address: 'Chennai, Tamil Nadu, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Netaji Subhas Chandra Bose International Airport',
        code: 'CCU',
        address: 'Kolkata, West Bengal, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chaudhary Charan Singh International Airport',
        code: 'LKO',
        address: 'Lucknow, Uttar Pradesh, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sri Guru Ram Dass Jee International Airport',
        code: 'ATQ',
        address: 'Amritsar, Punjab, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Visakhapatnam International Airport',
        code: 'VTZ',
        address: 'Visakhapatnam, Andhra Pradesh, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kannur International Airport',
        code: 'CNN',
        address: 'Kannur, Kerala, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Surat International Airport',
        code: 'STV',
        address: 'Surat, Gujarat, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Devi Ahilya Bai Holkar Airport',
        code: 'IDR',
        address: 'Indore, Madhya Pradesh, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cochin International Airport',
        code: 'COK',
        address: 'Kochi, Kerala, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sardar Vallabhbhai Patel International Airport',
        code: 'AMD',
        address: 'Ahmedabad, Gujarat, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Indira Gandhi International Airport',
        code: 'DEL',
        address: 'Delhi, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dabolim Airport',
        code: 'GOI',
        address: 'Goa, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pune Airport',
        code: 'PNQ',
        address: 'Pune, Maharashtra, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Thiruvananthapuram International Airport',
        code: 'TRV',
        address: 'Thiruvananthapuram, Kerala, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Coimbatore International Airport',
        code: 'CJB',
        address: 'Coimbatore, Tamil Nadu, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Calicut International Airport',
        code: 'CCJ',
        address: 'Calicut, Kerala, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Biju Patnaik International Airport',
        code: 'BBI',
        address: 'Bhubaneswar, Odisha, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lokpriya Gopinath Bordoloi International Airport',
        code: 'GAU',
        address: 'Guwahati, Assam, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lal Bahadur Shastri International Airport',
        code: 'VNS',
        address: 'Varanasi, Uttar Pradesh, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rajiv Gandhi International Airport',
        code: 'HYD',
        address: 'Hyderabad, Telangana, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tiruchirappalli International Airport',
        code: 'TRZ',
        address: 'Tiruchirappalli, Tamil Nadu, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dr. Babasaheb Ambedkar International Airport',
        code: 'NAG',
        address: 'Nagpur, Maharashtra, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sheikhul Aalam International Airport',
        code: 'SXR',
        address: 'Srinagar, Jammu and Kashmir, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Imphal International Airport',
        code: 'IMF',
        address: 'Imphal, Manipur, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jaipur International Airport',
        code: 'JAI',
        address: 'Jaipur, Rajasthan, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Madurai Airport',
        code: 'IXM',
        address: 'Madurai, Tamil Nadu, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bagdogra International Airport',
        code: 'IXB',
        address: 'Siliguri, West Bengal, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jay Prakash Narayan International Airport',
        code: 'PAT',
        address: 'Patna, Bihar, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mangalore International Airport',
        code: 'IXE',
        address: 'Mangalore, Karnataka, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chandigarh International Airport',
        code: 'IXC',
        address: 'Chandigarh, India',
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
