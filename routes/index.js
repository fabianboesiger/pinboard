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
  var color;
  var r = Math.floor(Math.random()*6);
  switch(r){
    case 0:
      color = "red";
      break;
    case 1:
      color = "green";
      break;
    case 2:
      color = "blue";
      break;
    case 3:
      color = "yellow";
      break;
    case 4:
      color = "cyan";
      break;
    case 5:
      color = "magenta";
      break;
  }
  res.render("articles/article", {"width": Math.floor(Math.random()*2+1), "height": Math.floor(Math.random()*2+1), "color": color});
});

module.exports = router;
