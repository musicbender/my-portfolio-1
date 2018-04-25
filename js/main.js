$(document).ready(function(){

/*******adds SVG code for work sample items. Removes DRY code from HTML*******/
    const $caption = $('.caption');
    const $captionMobile = $('.caption.second');

    const captionSvg = '<svg class="bigTriangleColor caption-triangle" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 101" preserveAspectRatio="none"><path d="M0 100 L75 0 L100 100 Z" /></svg>';

    const captionSvg2 = '<svg class="bigTriangleColor caption-triangle mobile" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 101" preserveAspectRatio="none"><path d="M0 100 L25 0 L100 100 Z" /></svg>';

    $caption.prepend(captionSvg);
    $captionMobile.prepend(captionSvg2);
    $('.caption-triangle.mobile').css('display', 'none');


/*******Smooth Scroll*******/
    $('.arrows-link').click(function(e) {
      e.preventDefault();
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, .main').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
});
