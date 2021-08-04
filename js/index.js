$(function(){
  $(document).scroll(function(){
       if($(this).scrollTop() > 150) {
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


$('.scrollHit').click(function(event){
    
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top -150
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
         // window.location.hash = hash;
        });
      } // End if
});