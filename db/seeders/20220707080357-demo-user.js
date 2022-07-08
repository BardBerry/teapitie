module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'admin',
        email: 'admin@yandex.ru',
        password: '123',
        admin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Сима',
        email: 'sima@yandex.ru',
        password: '123',
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Басан',
        email: 'basan@yandex.ru',
        password: '123',
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Никита',
        email: 'nikita@yandex.ru',
        password: '123',
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'artyom',
        email: 'artyom@yandex.ru',
        password: '123',
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
