var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  switch(req.session.fetched-1){
    case 0:
      res.redirect("/articles/home");
      break;
    default:
      res.redirect("/articles/article");
      break;
  }
});

module.exports = router;
