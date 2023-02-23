/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'AttractionDates',
      [
        {
          attractionId: 1,
          dateId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          attractionId: 9,
          dateId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          attractionId: 20,
          dateId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          attractionId: 27,
          dateId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          attractionId: 3,
          dateId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          attractionId: 13,
          dateId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('AttractionDates', null, {});
  },
};
