



(function ($) {
    "use strict";

    
    // Project Count js end


    /*================================
          Slicknav
       ==================================*/
    $('ul#nav-items').slicknav({
        label: '',
        prependTo: "#mobile-menu"
    });


     /*================================
    stickey Header
    ==================================*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop(),
            mainHeader = $('#header-area');

        if (scroll > 1) {
            mainHeader.addClass("black");
        } else {
            mainHeader.removeClass("black");
        }
    });

    // testominals
    $('.all-testmonial').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        slideSpeed: 1000,
        loop: true,
        autoplay: true,
        items: 1,
        dots: false,
        nav: false,
        margin: 15,
    });



    /*================================
          Skills 
    ==================================*/
    $(window).on('scroll', function () {
        var windowHeight = $(window).height(),
            scrollTop = $(this).scrollTop(),
            aboutTop = $('#about').offset().top,
            aboutHeight = $('#about').outerHeight();
        // barfiler
        if (scrollTop > (aboutTop + aboutHeight - windowHeight)) {
            $('#bar1').barfiller({
                barColor: '#3a3a3a',
                duration: 1500
            });
            $('#bar2').barfiller({
                barColor: '#3a3a3a',
                duration: 1500
            });
            $('#bar3').barfiller({
                barColor: '#3a3a3a',
                duration: 1500
            });
            $('#bar4').barfiller({
                barColor: '#3a3a3a',
                duration: 1500
            });
            $('#bar5').barfiller({
                barColor: '#3a3a3a',
                duration: 1500
            });
        };
    });
 

     
})(jQuery);