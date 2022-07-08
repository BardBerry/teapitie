const router = require('express').Router();
const { Tea, User, Comment } = require('../db/models');

router
  .route('/')
  .get(async (req, res) => {
    const response = await fetch('http://localhost:3000/lk/all');
    if (response.ok) {
      const { data, comment } = await response.json();
      console.log({ comment });
      return res.render('adminlk', { data, comment });
    }
  })

  .post((req, res) => {
    const {
      title, description, location, img,
    } = req.body;
    // console.log(title);
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

module.exports = router;
