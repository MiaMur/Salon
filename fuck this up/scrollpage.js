
$(document).on("scroll", function(){
  let pageTop = $(document).scrollTop();
  let pageBottom = pageTop + $(window).height();
  let tags = $(".tag");

  for (var i = 0; i < tags.length; i++){
    let tag = tags[i];

    if($(tag).position().top < pageBottom){
      $(tag).addClass("visible");
    }else{
      $(tag).removeClass("visible");
    }
  }
});

let lastScrollTop = 0;
$(window).scroll(function(){
  let st = $(this).scrollTop();
  let links = $(".show-links");
  setTimeout(function(){
    links.removeClass("show-links");
   lastScrollTop = st;
  }, 100)
});
