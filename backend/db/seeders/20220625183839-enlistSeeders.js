'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Enlists', [
    {
      testId: 1,
      userId: 5,
      startDate: '06/25/2022',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      testId: 2,
      userId: 6,
      startDate: '25/25/2025',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      testId: 3,
      userId: 7,
      startDate: '07/03/1985',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      testId: 4,
      userId: 8,
      startDate: '06/11/1993',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Enlists', null, {});
  }
};
