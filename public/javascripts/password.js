$(function(){
    var $password = $("#password");
    var $confirmPassword = $("#confirm-password");
    var $form = $("form");

    $password.bind('keyup mouseup',function(){
      checkPassword();
    });
    $confirmPassword.bind('keyup mouseup',function(){
      checkPassword();
    });

    function checkPassword(){
      if($password.val() === $confirmPassword.val()){
        var $confirmPasswordError = $("#confirm-password-error");
        if($confirmPasswordError.length){
          $confirmPasswordError.remove();
          $form.removeAttr("onsubmit");
          var $errors = $(".errors");
          if($errors.children().length === 0){
            $errors.remove();
          }
        }
      }else{
        var $errors = $(".errors");
        if($errors.children().length === 0){
          $form.append("<ul class='errors'></ul>");
          $errors = $(".errors");
        }
        var $confirmPasswordError = $("#confirm-password-error");
        if($confirmPasswordError.length === 0){
          $errors.append("<li id='confirm-password-error'>Die Passwörter stimmen nicht überein.</li>");
          $form.attr("onsubmit","return false;");
        }
      }
    }
});
