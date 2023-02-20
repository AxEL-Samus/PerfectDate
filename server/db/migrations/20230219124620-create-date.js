/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Dates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.STRING,
      },
      loveId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Loves',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      restLat: {
        type: Sequelize.STRING,
      },
      restLng: {
        type: Sequelize.STRING,
      },
      restTitle: {
        type: Sequelize.STRING,
      },
      restImg: {
        type: Sequelize.STRING,
      },
      kinoLat: {
        type: Sequelize.STRING,
      },
      kinoLng: {
        type: Sequelize.STRING,
      },
      kinoTitle: {
        type: Sequelize.STRING,
      },
      kinoImg: {
        type: Sequelize.STRING,
      },
      parkLat: {
        type: Sequelize.STRING,
      },
      parkLng: {
        type: Sequelize.STRING,
      },
      parkTitle: {
        type: Sequelize.STRING,
      },
      parkImg: {
        type: Sequelize.STRING,
      },
      taxi: {
        type: Sequelize.STRING,
      },
      kinoDate: {
        type: Sequelize.STRING,
      },
      movieTitle: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('Dates');
  },
};
