'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tests', [
      {
        userId: 1,
        url: 'https://cdnb.artstation.com/p/assets/images/images/001/318/069/medium/jacob-briggs-quantum2.jpg?1444250073',
        address:'[Redacted]',
        city: '[Redacted]',
        state: 'Michigan',
        country:'USA',
        name: 'Thinking with Portals',
        details: 'Looking for a Test Subject to solve some puzzles with our new Quantum Tunneling Device.',
        pay: 500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        url: 'https://static.wikia.nocookie.net/rickandmorty/images/8/88/Garage.png/revision/latest?cb=20160901004209',
        address:'6910 ask after applying',
        city: 'Seattle',
        state: 'Washington',
        country:'USA',
        name: 'Mega Seeds',
        details: 'Looking for a Morty to help me gather Mega Seeds, they are very important to my work.',
        pay: 500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        url: 'https://cdn.athlonoutdoors.com/wp-content/uploads/sites/14/2021/04/web_bfb-089.jpg',
        address:'535 N. Victory Blvd',
        city: 'Burbank',
        state: 'California',
        country:'USA',
        name: 'Heading, Back to the Future.',
        details: 'I just finished the final touches on my Flux capacitor, so i need someone to travel with me to the past as an assitant.',
        pay: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        url: 'https://cdn.vox-cdn.com/thumbor/MkgnCqtRLGVdXMHnyIuKTeZ2bWo=/0x0:3794x2029/1200x800/filters:focal(1599x436:2205x1042)/cdn.vox-cdn.com/uploads/chorus_image/image/66969974/Jurassic_Park_t03.mkv_snapshot_01.58.01_2019.02.15_11.07.22.0.jpg',
        address:'6910 ask after applying',
        city: 'Park Grounds',
        state: 'N/A',
        country:'Isla Nublar',
        name: 'Dinosaurs',
        details: 'Looking for healthy strong individuals who enjoy Dionsaurs, must be willing to sign NDA. Requires relocation',
        pay: 50000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tests', null, {});
  }
};
