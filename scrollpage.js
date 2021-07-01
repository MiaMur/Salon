
$(document).on("scroll", function(){
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag");

  for (var i = 0; i < tags.length; i++){
    var tag = tags[i];

    if($(tag).position().top < pageBottom){
      $(tag).addClass("visible");
    }else{
      $(tag).removeClass("visible");
    }
  }
});

/*var lastScrollTop = 0;
$(window).scroll(function(){
  var st = $(this).scrollTop();
  var links = $(".show-links");
  setTimeout(function(){
    if (st >lastScrollTop){
      links.addClass("hide");
    }else{
      links.addClass("show-links"); 
      
      
    }lastScrollTop = st;
  }, 100)
});*/
