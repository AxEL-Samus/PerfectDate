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
          attractionId: 14,
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
          attractionId: 26,
          dateId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          attractionId: 34,
          dateId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          attractionId: 6,
          dateId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          attractionId: 13,
          dateId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          attractionId: 2,
          dateId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          attractionId: 27,
          dateId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          attractionId: 4,
          dateId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          attractionId: 24,
          dateId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          attractionId: 31,
          dateId: 4,
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
