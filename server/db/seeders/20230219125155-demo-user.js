'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Алексей',
        pass: '123',
        email: 'alex@elbrus.ru',
        sex: 'sex-machine',
        theme: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Максим',
        pass: '123',
        email: 'maxFaks@elbrus.ru',
        sex: 'male',
        theme: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Андрей',
        pass: '123',
        email: 'andrey@elbrus.ru',
        sex: 'male',
        theme: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
