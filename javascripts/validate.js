module.exports = function(req, res, next, model, onError, preSave, onSuccess){
  var error = model.validateSync();
  if(error){
    for(let i in error.errors){
      req.flash("errors", error.errors[i].message);
    }
    res.redirect(onError);
  }else{
    if(preSave){
      preSave(model);
    }
    model.save(function(error, result){
      if(error){
        if(error.code === 11000){
          req.flash("errors", "Dieser Name wird bereits verwendet.")
          res.redirect(onError);
        }else{
          console.error(error);
          return next();
        }
      }else{
        if(typeof onSuccess === "function"){
          onSuccess(req, res, next, result);
        }else
        if(typeof onSuccess === "string"){
          res.redirect(onSuccess);
        }else{
          return next();
        }
      }
    });
  }
}
