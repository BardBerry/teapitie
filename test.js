const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User, Role } = require('../db/models');

router.post('/signup', async (req, res) => {
  const { username, pass, type } = req.body;
  const role = await Role.findOne({ where: { title: type } });
  const hashedPass = await bcrypt.hash(pass, 10);

  const [currUser, created] = await User.findOrCreate({
    where: {
      name: username,
    },
    defaults: {
      role: role.id,
      pass: hashedPass,
    },
  });
  req.session.userName = currUser.name;
  req.session.userRole = currUser.role;

  res.redirect('/');
});

router.post('/signin', async (req, res) => {
  const { username, pass } = req.body;
  const user = await User.findOne({ where: { name: username } });
  if (await bcrypt.compare(pass, user.pass)) {
    req.session.userName = user.name;
    req.session.userRole = user.role;
    if (user.role === 1) {
      res.redirect('/rap');
    } else {
      res.redirect('/rock');
    }
  } else {
    res.redirect('/');
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.redirect('/');
});

module.exports = router;
