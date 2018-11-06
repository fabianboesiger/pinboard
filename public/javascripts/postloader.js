$(function(){

  let $window = $(window);
  let $main = $("main");

  function visible($element){
    return $element.offset().top < $window.scrollTop() + $window.height() * 4;
  }

  function fetch(){
    if($main.children().length === 0 || visible($main.children().last())){
      $.get("/fetch", function(data){
        $main.append(data);
        if(update){
          update();
        }

        fetch();
      });
    }
  }

  fetch();

  $window.scroll(function(){
    fetch();
  });
  $window.resize(function(){
    fetch();
  });

});
