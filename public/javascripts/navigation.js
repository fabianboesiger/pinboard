$(function(){
  var page = window.location.href.substring(7,window.location.href.length).split("/");
  var navigationButtonClass = "";
  if(page[1] === ""){
    navigationButtonClass = "/";
  }else{
    for(let i = 1; i < page.length; i++){
      navigationButtonClass += "/"+page[i];
    }
  }
  $("nav a[href='"+navigationButtonClass+"']").addClass("active");
});
