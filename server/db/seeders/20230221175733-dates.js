/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Dates', [
      {
        time: '',
        userId: 1,
        loveId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        time: '',
        userId: 2,
        loveId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        time: '',
        userId: 3,
        loveId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        time: '',
        userId: 4,
        loveId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Dates', null, {});
  },
};
