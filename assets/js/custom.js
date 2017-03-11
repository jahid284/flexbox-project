jQuery(function($) {
	'use strict';
    //Enable scroll animation
   

   /* -------------------------------------------------------------
                    ----- Sticky Menu ----
    ------------------------------------------------------------- */
    (function() {
        var nav = $('.heade-nav');
        var scrolled = false;
        $(window).scroll(function() {
            if (110 < $(window).scrollTop() && !scrolled) {
                nav.addClass('sticky animated fadeInDown').css({
                    'margin-top': '0px'
                });
                scrolled = true;
            }
            if (110 > $(window).scrollTop() && scrolled) {
                nav.removeClass('sticky animated fadeInDown').css('margin-top', '0px');

                scrolled = false;
            }
        });
    }());






    $(".mb-twt").owlCarousel({
        stagePadding: 100,
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        pagination: false,
        items: 2,
        loop: false
    });


    //Activate scroll-based animation
    // AOS.init({
    //   duration: 1000
    // });

}); // JQuery end
