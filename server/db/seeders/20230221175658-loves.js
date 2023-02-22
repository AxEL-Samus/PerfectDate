/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Loves', [
      {
        name: 'Катя',
        sex: 'Девушка',
        userId: 1,
        pref: '{ 1: "3", 2: "2", 3: "0", 4: "3", 5: "0" }',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Маша',
        sex: 'Девушка',
        userId: 2,
        pref: '{ 1: "0", 2: "1", 3: "0", 4: "3", 5: "3" }',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Юля',
        sex: 'Девушка',
        userId: 3,
        pref: '{ 1: "3", 2: "2", 3: "0", 4: "3", 5: "0" }',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Антон',
        sex: 'Мужчина',
        userId: 4,
        pref: '{ 1: "3", 2: "2", 3: "0", 4: "3", 5: "0" }',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Loves', null, {});
  },
};
