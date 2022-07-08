/* eslint-disable camelcase */
const router = require('express').Router();
const { Comment } = require('../db/models');

router
  .route('/:id')
  .get((req, res) => {
    res.render('teaview');
  })
  .post(async (req, res) => {
    console.log(req.body);
    const { opinion  = req.body;
    const user_id = req.session.userId;
    const addpost = await Comment.create({
      post: opinion.myform.post,
      user_id,
      tea_id: opinion.id,
    });
    try {
      await opinion.save();
      res.json(post);
    } catch (err) {
      res.sendStatus(500);
    }
  });

// router
//   .route('/')

module.exports = router;
