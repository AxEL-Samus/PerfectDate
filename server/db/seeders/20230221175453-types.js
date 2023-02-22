/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Types', [
      {
        name: 'Ресторан',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Кино',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Мастер-класс',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Картинг',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Боулинг',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Парк',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Квест',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Экскурсия',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Музей',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Картинная выставка',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Планетарий',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Коньки',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Конная прогулка',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Винная дегустация',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Бар',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Театр',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Прыжок с парашютом',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Концерт',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'День открытых дверей в Эльбрус',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Чайная церемония',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Батуты',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Аквапарк',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Бильярд',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Поездка за город',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Парк аттракционов',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Спа-салон',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Types', null, {});
  },
};
