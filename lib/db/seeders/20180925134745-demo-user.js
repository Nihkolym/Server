'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    let mockData = [];
    
    for (let i = 0; i < 100; i++) {
      mockData.push(
        {
          firstname: faker.name.firstName(),
          lastname: faker.name.lastName(),
          address: faker.address.streetAddress(),
          phone: faker.phone.phoneNumber(),
          email: faker.internet.email()
        }
      )
    }

    return queryInterface.bulkInsert('users', mockData, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});  
  }
};
