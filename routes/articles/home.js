var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.render("articles/home", {"width": 2, "height": 2, "color": Math.floor(Math.random()*36)});
});

module.exports = router;
