'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
    {
      testId: 1,
      url: 'https://cdnb.artstation.com/p/assets/images/images/001/318/069/medium/jacob-briggs-quantum2.jpg?1444250073',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      testId: 2,
      url: 'https://static.wikia.nocookie.net/rickandmorty/images/8/88/Garage.png/revision/latest?cb=20160901004209',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      testId: 3,
      url: 'https://cdn.athlonoutdoors.com/wp-content/uploads/sites/14/2021/04/web_bfb-089.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      testId: 4,
      url: 'https://cdn.vox-cdn.com/thumbor/MkgnCqtRLGVdXMHnyIuKTeZ2bWo=/0x0:3794x2029/1200x800/filters:focal(1599x436:2205x1042)/cdn.vox-cdn.com/uploads/chorus_image/image/66969974/Jurassic_Park_t03.mkv_snapshot_01.58.01_2019.02.15_11.07.22.0.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', null, {});
  }
};
