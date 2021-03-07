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

  (function() {
    scrollTo();
})();

function scrollTo() {
    const links = document.querySelectorAll('.scrollWork');
    links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
    e.preventDefault();
    var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);
    window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
    const checkIfDone = setInterval(function() {
        const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
            targetAnchor.tabIndex = '-1';
            targetAnchor.focus();
            window.history.pushState('', '', targetID);
            clearInterval(checkIfDone);
        }
    }, 100);
}