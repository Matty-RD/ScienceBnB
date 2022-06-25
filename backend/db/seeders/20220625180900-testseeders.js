'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tests', [
      {
        userId: 1,
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
