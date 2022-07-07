const router = require('express').Router();
const { Op } = require('sequelize');
const { Tea, Comment, User } = require('../db/models');

router.post('/', async (req, res) => {
  try {
    const data = await Tea.findOne({ where: { title: req.body.target } });
    res.json({ data });
  } catch (error) {
    alert('something went wrong :( fetch post /tea');
  }
});

router.get('/', async (req, res) => {
  try {
    const allTeas = await Tea.findAll();
    res.json(allTeas);
  } catch (error) {
    alert('something went wrong :( fetch: get /tea');
  }
});

router.post('/teas', async (req, res) => {
  const { latitude } = req.body;
  const { longitude } = req.body;
  try {
    const tea = await Tea.findOne({
      where: { [Op.and]: [{ latitude }, { longitude }] },
      include: {
        model: Comment,
        include: {
          model: User,
        },
      },
    });
    return res.json({ tea });
  } catch (error) {
    return res.json(error);
  }
});

router.get('/:latitude/:longitude', async (req, res) => {
  const response = await fetch('http://localhost:3000/teapitie/teas', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(req.params),
  });

  if (response.ok) {
    const { tea } = await response.json();
    return res.render('teaview', { tea });
  }
  const error = await response.json();
  alert(error);
});

module.exports = router;
