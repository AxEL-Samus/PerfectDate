/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Loves',
      [
        {
          name: 'Алена',
          food: 'Суши',
          mapLat: '55.892790',
          mapLng: '37.654393',
          movie: 'Боевики',
          sex: 'female',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Лена',
          food: 'Море',
          mapLat: '55.627316',
          mapLng: '37.655437',
          movie: 'Драмы',
          sex: 'female',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Null',
          food: 'Все',
          mapLat: '37.851535',
          mapLng: '37.851535',
          movie: 'Лакорны',
          sex: 'female',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
