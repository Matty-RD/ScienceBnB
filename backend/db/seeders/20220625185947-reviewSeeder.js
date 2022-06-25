'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
    {
      userId: 5,
      testId: 1,
      review: 'Tasted like Nerve Gas and never got my cake.',
      rating: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 6,
      testId: 2,
      review: 'Ahh, jeez',
      rating: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 7,
      testId: 3,
      review: 'Great time! Well, except for almost becoming my own grandfather.',
      rating: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 8,
      testId: 4,
      review: 'Im missing an arm and can not see a geico commercail without screaming.',
      rating: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
