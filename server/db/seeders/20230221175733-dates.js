/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Dates', [
      {
        attraction1id: 1,
        attraction2id: 3,
        attraction3id: 2,
        time: '',
        userId: 1,
        loveId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        attraction1id: 3,
        attraction2id: 1,
        attraction3id: 2,
        time: '',
        userId: 2,
        loveId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        attraction1id: 2,
        attraction2id: 1,
        attraction3id: 3,
        time: '',
        userId: 3,
        loveId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        attraction1id: 1,
        attraction2id: 2,
        attraction3id: 3,
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
