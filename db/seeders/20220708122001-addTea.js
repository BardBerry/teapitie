module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Teas', [
      {
        title: 'Тай Габа Улун',
        description: `Букет готового чая яркий, фруктово-ягодный с древесными и пряными нотками. Аромат интенсивный, теплый, фруктовый. Вкус плотный, маслянистый, сладковатый, с легкой травянистой горчинкой, кислинкой фруктовой карамели и освежающим послевкусием.
        
        Заваривать горячей водой (85-90°С) в фарфоровой гайвани или чайнике из пористой глины. Пропорция заварки к воде: 6 г на 100 мл. Для первого раза настоять 20 секунд, после чего пить проливом с постепенным увеличением экспозиции. Выдерживает 8-9 завариваний.`,
        location: 'Чианграй',
        img: 'https://moychay.ru/system/product_ng_fotos/39122/medium/9f3b3b188900b932843e2da7114964da25bd2b2b/moychay_59777.jpg',
        latitude: 19.911181,
        longitude: 99.834862,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Те Гуань Инь',
        description: `В сухом виде: крупные, ярко-зеленые комочки скрученных чайных побегов с длинными черенками. Аромат интенсивный, пряно-цветочный. Настой прозрачный, золотисто-зеленого оттенка, в процессе чаепития желтеет.
        
        Букет готового чая свежий, многогранный, травянисто-цветочный с нотками сирени, ванили и персика. Упоительный, яркий, пряно-цветочный аромат. Вкус мягкий, плотный, маслянистый, сладковатый, с тонкой ягодной кислинкой, черенки придают ему особую сочность и дополнительный объем. Послевкусие долгое, сочное и сладкое.`,
        location: 'Фуцзянь',
        img: 'https://moychay.ru/system/product_fotos/images/000/391/162/medium/_MG_6669_copy.jpg',
        latitude: 26.013771,
        longitude: 119.318153,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Барбакуа органик йерба мате',
        description: `Классический насыщенный яркий барбакуа с обильным содержанием стеблей. Аромат насыщенный, приятный, долгий и невероятно свежий. Вкус сложный, глубокий, с копченым, дымчатым послевкусием. Не горчит. Держит большое количество проливов. Воздействие сильное и долгое.

        Отлично подойдет для ценителей пропеченного маслянистого парагвайского мате.`,
        location: 'Парагвай',
        img: 'https://moychay.ru/system/product_fotos/images/000/468/957/medium/_MG_3195.jpg',
        latitude: -25.298249,
        longitude: -57.622533,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Нилгири Маофэн',
        description: `В сухом виде: среднего размера изогнутые, скрученные, зеленые почки и тонкие черенки. Аромат сдержанный, травянистый. Настой прозрачный, яркого желто-зеленого оттенка.

        Букет готового чая свежий, травянисто-цветочный с нотками фруктов и ягод. Аромат интенсивный, яркий, травянисто-цветочный. Вкус плотный, сочный и сладкий, маслянистый, чуть вяжущий, с фруктовой кислинкой и освежающим послевкусием.`,
        location: 'Тамилнад',
        img: 'https://moychay.ru/system/product_ng_fotos/33640/medium/1308f0bfb4344b3d4d5b57d5a7d8ece1b73ddabb/moychay_27592.jpg',
        latitude: 13.063977,
        longitude: 80.144986,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Краснодарский зеленый чай из Хосты',
        description: `В сухом вид: длинные жгутики скрученных листиков темно-зеленых оттенков. Аромат сухого чая насыщенный, травянисто-медовый. Настой прозрачный, светлого виноградного оттенка.

        Букет готового чая яркий, свежий, травянисто-цветочный с ореховой ноткой. Вкус мягкий, сочный, плотный, скользящий, сладковатый. Аромат нежный, травянисто-цветочный. Приятное, освежающее послевкусие.`,
        location: 'Хоста',
        img: 'https://moychay.ru/system/product_ng_fotos/33640/medium/1308f0bfb4344b3d4d5b57d5a7d8ece1b73ddabb/moychay_27592.jpg',
        latitude: 43.512829,
        longitude: 39.873709,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Teas', null, {});
  },
};