
mybutton = document.getElementById("myBtn");

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var stickyTop = $(".navigation-section").offset().top;
//whenever the user scrolls, measure how far we have scrolled
$(window).scroll(function() {
    var windowTop = $(window).scrollTop();
  
    if (windowTop > stickyTop) {
      $(".navigation-section").addClass("stuck");
      $(".step-number").addClass("step-number-stuck");
      $(".step-name").addClass("step-name-stuck");
      $(".nav-step").addClass("nav-step-stuck");
      $(".sticky-header").addClass("sticky-header-stuck");
      $(".navigation-steps").addClass("navigation-steps-stuck");
      $(".nav-step-content").addClass("nav-step-content-stuck");
      
    } else {
      $(".navigation-section").removeClass("stuck");
      $(".step-number").removeClass("step-number-stuck");
      $(".step-name").removeClass("step-name-stuck");
      $(".nav-step").removeClass("nav-step-stuck");
      $(".sticky-header").removeClass("sticky-header-stuck");
      $(".navigation-steps").removeClass("navigation-steps-stuck");
      $(".nav-step-content").removeClass("nav-step-content-stuck");

    }
  });

//research
  $(function(){
    $(document).scroll(function(){
        if($(this).scrollTop() >= $('#research').offset().top - 100) {
            $(".step-1").addClass("step-1-stuck");
            $(".step-name-1").addClass("step-name-1-stuck");
  
        } else {
            $(".step-1").removeClass("step-1-stuck");
            $(".step-name-1").removeClass("step-name-1-stuck");
        }
    });
  });

  //define
  $(function(){
    $(document).scroll(function(){
        if($(this).scrollTop() >= $('#define').offset().top - 100) {
            $(".nav-step-2").append("<style>.nav-step-2:before{background-color:black !important;}</style>");
            $(".step-2").addClass("step-2-stuck");
            $(".step-name-2").addClass("step-name-2-stuck");

  
        } else {
            $(".step-2").removeClass("step-2-stuck");
            $(".step-name-2").removeClass("step-name-2-stuck");
            $(".nav-step-2").append("<style>.nav-step-2:before{background-color:#939597 !important;}</style>")
        }
    });
  });

  //ideate
  $(function(){
    $(document).scroll(function(){
        if($(this).scrollTop() >= $('#ideate').offset().top - 100) {
            $(".nav-step-3").append("<style>.nav-step-3:before{background-color:black !important;}</style>");
            $(".step-3").addClass("step-3-stuck");
            $(".step-name-3").addClass("step-name-3-stuck");

  
        } else {
            $(".step-3").removeClass("step-3-stuck");
            $(".step-name-3").removeClass("step-name-3-stuck");
            $(".nav-step-3").append("<style>.nav-step-3:before{background-color:#939597 !important;}</style>");
        }
    });
  });

  //Prototype
  $(function(){
    $(document).scroll(function(){
        if($(this).scrollTop() >= $('#prototype').offset().top - 100) {
            $(".nav-step-4").append("<style>.nav-step-4:before{background-color:black !important;}</style>");
            $(".step-4").addClass("step-4-stuck");
            $(".step-name-4").addClass("step-name-4-stuck");

  
        } else {
            $(".step-4").removeClass("step-4-stuck");
            $(".step-name-4").removeClass("step-name-4-stuck");
            $(".nav-step-4").append("<style>.nav-step-4:before{background-color:#939597 !important;}</style>");
        }
    });
  });

  //Testing
  $(function(){
    $(document).scroll(function(){
        if($(this).scrollTop() >= $('#testing').offset().top - 100) {
            $(".nav-step-5").append("<style>.nav-step-5:before{background-color:black !important;}</style>");
            $(".step-5").addClass("step-5-stuck");
            $(".step-name-5").addClass("step-name-5-stuck");

  
        } else {
            $(".step-5").removeClass("step-5-stuck");
            $(".step-name-5").removeClass("step-name-5-stuck");
            $(".nav-step-5").append("<style>.nav-step-5:before{background-color:#939597 !important;}</style>");
        }
    });
  });

  jQuery(function($) {
  
    // Function which adds the 'animated' class to any '.animatable' in view
    var doAnimations = function() {
      
      // Calc current offset and get all animatables
      var offset = $(window).scrollTop() + $(window).height(),
          $animatables = $('.animatable');
      
      // Unbind scroll handler if we have no animatables
      if ($animatables.length == 0) {
        $(window).off('scroll', doAnimations);
      }
      
      // Check all animatables and animate them if necessary
      $animatables.each(function(i) {
         var $animatable = $(this);
        if (($animatable.offset().top + $animatable.height() - 100) < offset) {
          $animatable.removeClass('animatable').addClass('animated');
        }
      });
  
    };
    
    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');
  
  });