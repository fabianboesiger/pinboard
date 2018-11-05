$(function(){
  $.get("/fetch", function(data){
    $("main").append(data);
  });
});
