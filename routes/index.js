const router = require('express').Router();
const { Comment } = require('../db/models');

router
  .route('/:id')
  .get((req, res) => {
    res.render('teaview');
  })
  .post(async (req, res) => {
    try {
      const { post } = req.body;
      const user_id = req.session.userId;
      const addpost = Comment.create({ post: post.myform, user_id, tea_id: post.id });
      await post.save();
      res.json(post);
    } catch (err) {
      res.sendStatus(500);
    }
  });

// router
//   .route('/')

module.exports = router;
