'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Dates', [
      {
        title: 'Призрачная встречная',
        date: '12.10.2022',
        loveId: 1,
        restLat: '55.7572611',
        restLng: '37.6467068',
        restTitle: 'IL Patio',
        kinoLat: '55.7844647',
        kinoLng: '37.5539406',
        kinoTitle: 'КАРО',
        parkLat: '55.7583841',
        parkLng: '37.6568332',
        parkTitle: 'Лефортово',
        taxi: '55.7583841,37.6568332',
        kinoDate: '21:30',
        movieTitle: 'Форсаж 10',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Попытка не пытка',
        date: '03.09.2022',
        loveId: 2,
        restLat: '55.7569451',
        restLng: '37.613978',
        restTitle: 'Dr. Живаго',
        kinoLat: '55.7528815',
        kinoLng: '37.5860276',
        kinoTitle: 'КАРО Октябрь',
        parkLat: '55.7036972',
        parkLng: '37.5634632',
        parkTitle: 'Воробьевы горы',
        taxi: '55.862525,37.494133',
        kinoDate: '22:10',
        movieTitle: 'Дюна 2',
        userId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      title: 'Интрига в Эльбрусе',
      date: '05.01.2023',
      loveId: 3,
      restLat: '55.821611',
      restLng: '37.6603437',
      restTitle: 'Ершь',
      kinoLat: '',
      kinoLng: '',
      kinoTitle: '',
      parkLat: '55.703697255',
      parkLng: '37.676407',
      parkTitle: 'Сокольники',
      taxi: '55.86252555,37.494133',
      kinoDate: '',
      movieTitle: '',
      userId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Dates', null, {});
  }
};
