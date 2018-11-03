var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.render('user/password', {"errors": req.flash("errors")});
});

router.post('/', function(req, res, next){
  var user = req.session.user;
  user.password = req.body.password;
  validateModel(req, res, next, user, "password", (model)=>{
    model.encryptPassword();
  }, "account");
});

module.exports = router;
