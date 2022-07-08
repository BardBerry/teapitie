const router = require('express').Router();
const { Tea, User, Comment } = require('../db/models');

router
  .route('/')
  .get(async (req, res) => {
    try {
      const data = await Tea.findAll();
      const comment = await Comment.findAll({
        include: {
          model: User,
        },
      });
      return res.render('adminlk', { data, comment });
    } catch (error) {
      res.sendStatus(500);
    }
  })

  .post((req, res) => {
    const {
      title, description, location, img,
    } = req.body;
    const addTea = Tea.create({
      // eslint-disable-next-line max-len
      title, description, location, img, latitude: null, longitude: null, createdAt: new Date(), updatedAt: new Date(),
    });
    res.sendStatus(200);
  });

router.get('/all', async (req, res) => {
  try {
    const data = await Tea.findAll();
    const comment = await Comment.findAll({
      include: {
        model: User,
      },
    });
    res.json({ data, comment });
  } catch (error) {
    res.sendStatus(500);
  }
});

router.delete('/tea/:id', async (req, res) => {
  try {
    console.log(await Tea.findOne({ where: { id: req.params.id } }));
    await Tea.destroy({ where: { id: req.params.id } });
    return res.sendStatus(200);
  } catch (error) {
    return res.json({ error }).status(500);
  }
});

router.delete('/comment/:id', async (req, res) => {
  try {
    await Comment.destroy({ where: { id: req.params.id } });
    return res.sendStatus(200);
  } catch (error) {
    return res.json({ error }).status(500);
  }
});

module.exports = router;
