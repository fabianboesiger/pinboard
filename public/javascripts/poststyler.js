var update = undefined;

$(function(){

  let $main = $("main");
  let margin = 16;
  let used = [];

  update = function(){

    let size = {
      width: $main.width(),
      height: $main.height()
    }

    let cells = Math.floor(size.width/512)+1;

    $article = $("article");

    $article.each(function(){

      let $this = $(this);

      if($this.attr("positioned") == undefined){

        let width = parseInt($this.attr("width"));
        if(width > cells){width = cells;}
        let height = parseInt($this.attr("height"));
        if(height > cells){height = cells;}

        $this.css("width", size.width*width/cells-margin*2+"px");
        $this.css("height", size.width*height/cells-margin*2+"px");

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

        $this.css("left", size.width*left/cells+margin+"px");
        $this.css("top", size.width*top/cells+margin+"px");
        $this.attr("positioned", true);
        $this.css("background-color", "hsl("+(parseInt($this.attr("color"))*10)+", 50%, 80%)");

        used.push({
          "left": left,
          "top": top,
          "width": width,
          "height": height
        });

      }

    });

  }

  $(window).resize(function(){
    $("article").removeAttr("positioned");
    used = [];
    update();
  });

});
