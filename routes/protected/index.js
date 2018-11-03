var express = require('express');
var router = express.Router();

var User = include('/schemas/user');

router.all('/*', function(req, res, next){
  if(req.session.user){
    User.findById(req.session.user._id, function(error, result){
      if(error){
        console.error(error);
      }else{
        if(result){
          req.session.user = result;
        }
      }
      return next();
    });
  }else{
    res.redirect("/user/signin");
  }
});

router.use('/user', require('./user/index'));

module.exports = router;
