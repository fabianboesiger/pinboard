$(function(){

  for(let i = 0; i < 64; i++){
    $.get("/fetch", function(data){
      $("main").append(data);
      if(update){
        update();
      }
    });
  }

});
