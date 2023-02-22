/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Андрей',
        email: 'jos1@mail.org',
        pass: '4liYNYpzWectpFSXt7bXtZe5p6r2',
        sex: 'Мужчина',
        theme: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Максим',
        email: 'jos7@mail.org',
        pass: '4liYNYpzWectpFSXt7bXtZe5p6r2',
        sex: 'Мужчина',
        theme: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Алексей',
        email: 'jos2@mail.org',
        pass: '4liYNYpzWectpFSXt7bXtZe5p6r2',
        sex: 'Мужчина',
        theme: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Даша',
        email: 'jos3@mail.org',
        pass: '4liYNYpzWectpFSXt7bXtZe5p6r2',
        sex: 'Девушка',
        theme: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Аня',
        email: 'jos4@mail.org',
        pass: '4liYNYpzWectpFSXt7bXtZe5p6r2',
        sex: 'Девушка',
        theme: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Маша',
        email: 'jos5@mail.org',
        pass: '4liYNYpzWectpFSXt7bXtZe5p6r2',
        sex: 'Девушка',
        theme: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Жозефина',
        email: 'jos6@mail.org',
        pass: '4liYNYpzWectpFSXt7bXtZe5p6r2',
        sex: 'Небинарная личность',
        theme: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
