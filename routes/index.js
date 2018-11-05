var express = require('express');
var router = express.Router();

router.use(function(req, res, next){
  res.locals.session = req.session;
  res.locals.about = about;
  return next();
});

router.get('/', function(req, res, next){
  var authenticated = false;
});

module.exports = router;
