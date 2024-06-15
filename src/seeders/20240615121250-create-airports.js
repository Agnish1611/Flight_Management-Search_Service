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
        address: 'Mumbai, Maharashtra, India'
      },
      {
        name: 'Kempegowda International Airport',
        code: 'BLR',
        address: 'Bangalore, Karnataka, India'
      },
      {
        name: 'Chennai International Airport',
        code: 'MAA',
        address: 'Chennai, Tamil Nadu, India'
      },
      {
        name: 'Netaji Subhas Chandra Bose International Airport',
        code: 'CCU',
        address: 'Kolkata, West Bengal, India'
      },
      {
        name: 'Chaudhary Charan Singh International Airport',
        code: 'LKO',
        address: 'Lucknow, Uttar Pradesh, India'
      },
      {
        name: 'Sri Guru Ram Dass Jee International Airport',
        code: 'ATQ',
        address: 'Amritsar, Punjab, India'
      },
      {
        name: 'Visakhapatnam International Airport',
        code: 'VTZ',
        address: 'Visakhapatnam, Andhra Pradesh, India'
      },
      {
        name: 'Kannur International Airport',
        code: 'CNN',
        address: 'Kannur, Kerala, India'
      },
      {
        name: 'Surat International Airport',
        code: 'STV',
        address: 'Surat, Gujarat, India'
      },
      {
        name: 'Devi Ahilya Bai Holkar Airport',
        code: 'IDR',
        address: 'Indore, Madhya Pradesh, India'
      },
      {
        name: 'Cochin International Airport',
        code: 'COK',
        address: 'Kochi, Kerala, India'
      },
      {
        name: 'Sardar Vallabhbhai Patel International Airport',
        code: 'AMD',
        address: 'Ahmedabad, Gujarat, India'
      },
      {
        name: 'Indira Gandhi International Airport',
        code: 'DEL',
        address: 'Delhi, India'
      },
      {
        name: 'Dabolim Airport',
        code: 'GOI',
        address: 'Goa, India'
      },
      {
        name: 'Pune Airport',
        code: 'PNQ',
        address: 'Pune, Maharashtra, India'
      },
      {
        name: 'Thiruvananthapuram International Airport',
        code: 'TRV',
        address: 'Thiruvananthapuram, Kerala, India'
      },
      {
        name: 'Coimbatore International Airport',
        code: 'CJB',
        address: 'Coimbatore, Tamil Nadu, India'
      },
      {
        name: 'Calicut International Airport',
        code: 'CCJ',
        address: 'Calicut, Kerala, India'
      },
      {
        name: 'Biju Patnaik International Airport',
        code: 'BBI',
        address: 'Bhubaneswar, Odisha, India'
      },
      {
        name: 'Lokpriya Gopinath Bordoloi International Airport',
        code: 'GAU',
        address: 'Guwahati, Assam, India'
      },
      {
        name: 'Lal Bahadur Shastri International Airport',
        code: 'VNS',
        address: 'Varanasi, Uttar Pradesh, India'
      },
      {
        name: 'Rajiv Gandhi International Airport',
        code: 'HYD',
        address: 'Hyderabad, Telangana, India'
      },
      {
        name: 'Tiruchirappalli International Airport',
        code: 'TRZ',
        address: 'Tiruchirappalli, Tamil Nadu, India'
      },
      {
        name: 'Dr. Babasaheb Ambedkar International Airport',
        code: 'NAG',
        address: 'Nagpur, Maharashtra, India'
      },
      {
        name: 'Sheikhul Aalam International Airport',
        code: 'SXR',
        address: 'Srinagar, Jammu and Kashmir, India'
      },
      {
        name: 'Imphal International Airport',
        code: 'IMF',
        address: 'Imphal, Manipur, India'
      },
      {
        name: 'Jaipur International Airport',
        code: 'JAI',
        address: 'Jaipur, Rajasthan, India'
      },
      {
        name: 'Madurai Airport',
        code: 'IXM',
        address: 'Madurai, Tamil Nadu, India'
      },
      {
        name: 'Bagdogra International Airport',
        code: 'IXB',
        address: 'Siliguri, West Bengal, India'
      },
      {
        name: 'Jay Prakash Narayan International Airport',
        code: 'PAT',
        address: 'Patna, Bihar, India'
      },
      {
        name: 'Mangalore International Airport',
        code: 'IXE',
        address: 'Mangalore, Karnataka, India'
      },
      {
        name: 'Chandigarh International Airport',
        code: 'IXC',
        address: 'Chandigarh, India'
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
