const router = require('express').Router();
const { Tea } = require('../db/models');

router
  .route('/')
  .get((req, res) => {
    res.render('adminlk');
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

module.exports = router;
