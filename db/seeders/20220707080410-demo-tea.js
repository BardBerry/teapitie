module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Teas', [
      {
        title: 'улунг',
        description: 'вкусный чай',
        location: 'москва',
        img: 'https://i.pinimg.com/originals/a8/dc/0b/a8dc0badadf695dc9266522b3b2956c5.jpg',
        latitude: 55.755864,
        longitude: 37.617698,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'элгрей',
        description: 'вкусный чай',
        location: 'франция',
        img: 'shorturl.at/QRT03',
        latitude: 48.856663,
        longitude: 2.351556,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'пуер',
        description: 'вкусный чай',
        location: 'индия',
        img: 'shorturl.at/QRT03',
        latitude: 28.632909,
        longitude: 77.220026,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'зеленый',
        description: 'вкусный чай',
        location: 'китай',
        img: 'shorturl.at/QRT03',
        latitude: 39.901698,
        longitude: 116.391433,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Teas', null, {});
  },
};
