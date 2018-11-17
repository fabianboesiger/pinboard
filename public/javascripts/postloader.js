$(function(){

  let $window = $(window);
  let $board = $("#board");

  function visible($element){
    return $element.offset().top < $window.scrollTop() + $window.height() * 4;
  }

  function fetch(){
    if($board.children().length === 0 || visible($board.children().last())){
      $.get("/fetch", function(data){
        $board.append(data);
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
    $board.css("height", $window.scrollTop());
  });
  $window.resize(function(){
    fetch();
  });

});
