var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.render("articles/article", {"width": Math.floor(Math.pow(Math.random(), 8)*2+1), "height": Math.floor(Math.pow(Math.random(), 8)*2+1), "color": Math.floor(Math.random()*36)});
});

module.exports = router;
