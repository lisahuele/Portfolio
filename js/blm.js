
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
    } else {   
      $(".navigation-section").removeClass("stuck");
    }
  });
