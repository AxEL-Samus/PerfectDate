/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AttractionDates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      attractionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Attractions',
        },
        key: 'id',
      },
      dateId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Dates',
        },
        key: 'id',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('AttractionDates');
  },
};
