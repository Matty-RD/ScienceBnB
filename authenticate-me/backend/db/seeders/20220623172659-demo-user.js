'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {        email: 'GlaDOS@user.io',
        username: 'GlaDOS',
        hashedPassword: bcrypt.hashSync('password')
      },
      {        email: 'RickestRick@user.io',
        username: 'buurp',
        hashedPassword: bcrypt.hashSync('password')
      },
      {        email: 'DocClocks@user.io',
        username: 'Einstein',
        hashedPassword: bcrypt.hashSync('password')
      },
      {        email: 'DinoLover@user.io',
        username: 'johnHams',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'Chelling@user.io',
        username: 'SilentButDeadly',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'MortiestMorty@user.io',
        username: 'MortySmith',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'FlyBoy@user.io',
        username: 'McLovin',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'DinoProfessional@user.io',
        username: 'AlanGrant',
        hashedPassword: bcrypt.hashSync('password')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
