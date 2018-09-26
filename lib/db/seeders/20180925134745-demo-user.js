'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      firstName: 'John',
      lastName: 'Doe',
      address: "Gagarina",
      phone: '000032103120',
    },
    {
      firstName: 'Kostya',
      lastName: 'Pusha',
      address: "Ggca",
      phone: '0312031',
    },
    {
      firstName: 'Kostya',
      lastName: 'Pusha',
      address: "Ggca",
      phone: '0312031',
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});  
  }
};
