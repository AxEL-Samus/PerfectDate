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
      attraction1id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Attractions',
        },
        key: 'id',
      },
      attraction2id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Attractions',
        },
        key: 'id',
      },
      attraction3id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Attractions',
        },
        key: 'id',
      },
      time: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
        },
        key: 'id',
      },
      loveId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Loves',
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
    await queryInterface.dropTable('Dates');
  },
};
