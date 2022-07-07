module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [
      {
        post: 'контент',
        user_id: 1,
        tea_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post: 'контент',
        user_id: 1,
        tea_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post: 'контент',
        user_id: 2,
        tea_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post: 'контент',
        user_id: 3,
        tea_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post: 'контент',
        user_id: 1,
        tea_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post: 'контент',
        user_id: 4,
        tea_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
