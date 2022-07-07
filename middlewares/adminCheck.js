function adminCheck(req, res, next) {
  if (req.session?.username !== 'admin') {
    res.redirect('/');
  } else {
    next();
  }
}

module.exports = adminCheck;
