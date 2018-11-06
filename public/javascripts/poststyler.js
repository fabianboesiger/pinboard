var update = undefined;

$(function(){

  let $window = $(window);

  update = function(){

    let size = {
      width: $window.width(),
      height: $window.height()
    }

    let used = [];

    let cells = Math.floor(size.width/384)+1;

    $article = $("article");

    $article.each(function(){

      let $this = $(this);

      let width = parseInt($this.attr("width"));
      if(width > cells){width = cells;}
      let height = parseInt($this.attr("height"));
      if(height > cells){height = cells;}

      $this.css("width", size.width*width/cells+"px");
      $this.css("height", size.width*height/cells+"px");

      let left = 0;
      let top = 0;

      function free(){
        for(let i = 0; i < used.length; i++){
          let t = used[i];
          if(left < t.left+t.width
          && left+width > t.left
          && top < t.top+t.height
          && top+height > t.top){
            return false;
          }
        }
        return true;
      }

      while(!free()){
        left++;
        if(left+width > cells){
          left = 0;
          top++;
        }
      };

      $this.css("left", size.width*left/cells+"px");
      $this.css("top", size.width*top/cells+"px");

      used.push({
        "left": left,
        "top": top,
        "width": width,
        "height": height
      });

    });
  }

  $window.resize(function(){
    update();
  });

});
