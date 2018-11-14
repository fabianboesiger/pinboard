var express = require('express');
var router = express.Router();

router.use(function(req, res, next){
  res.locals.session = req.session;
  res.locals.about = about;
  return next();
});

router.get('/', function(req, res, next){
  res.render("index");
});

router.use('/fetch', require('./fetch'));
router.use('/articles', require('./articles/index'));

module.exports = router;
