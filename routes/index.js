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

router.get('/fetch', function(req, res, next){
  var authenticated = false;
  res.render("articles/article", {"width": Math.floor(Math.pow(Math.random(), 8)*2+1), "height": Math.floor(Math.pow(Math.random(), 8)*2+1), "color": "hsl("+Math.floor(Math.random()*360)+", 50%, 50%)"});
});

module.exports = router;
