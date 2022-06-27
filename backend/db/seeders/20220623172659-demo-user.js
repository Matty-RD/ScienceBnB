'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        scientist: false,
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        scientist: false,
        email: 'user1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        scientist: false,
        email: 'user2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        scientist: true,
        email: 'GlaDOS@user.io',
        username: 'GlaDOS',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        scientist: true,
        email: 'RickestRick@user.io',
        username: 'buurp',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        scientist: true,
        email: 'DocClocks@user.io',
        username: 'Einstein',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        scientist: true,
        email: 'DinoLover@user.io',
        username: 'johnHams',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        scientist: false,
        email: 'Chelling@user.io',
        username: 'SilentButDeadly',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        scientist: false,
        email: 'MortiestMorty@user.io',
        username: 'MortySmith',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        scientist: false,
        email: 'FlyBoy@user.io',
        username: 'McLovin',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        scientist: true,
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
