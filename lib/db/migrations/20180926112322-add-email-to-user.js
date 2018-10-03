'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let tableDefinition = await queryInterface.describeTable("users");
    if(!tableDefinition.email){
      return queryInterface.addColumn("users", "email", {
        type: Sequelize.STRING
      })
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("users", "email");
  }
};
