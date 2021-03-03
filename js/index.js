$(function(){
    $(document).scroll(function(){
        if($(this).scrollTop() >= $('#approach').offset().top - 100) {
            $(".header").addClass("header-stuck");
            $(".slice").addClass("slice-stuck");
            $(".top").addClass("top-stuck");
            $(".bottom").addClass("bottom-stuck");
            
        } else {
            $(".header").removeClass("header-stuck");
            $(".slice").removeClass("slice-stuck");
            $(".top").removeClass("top-stuck");
            $(".bottom").removeClass("bottom-stuck"); 
        }
    });
  });