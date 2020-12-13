(function ($) {
    "use strict";


    /*================================
    Preloader
    ==================================*/
        var preloader = $('#preloader');
        $(window).on('load', function () {
            preloader.fadeOut('slow', function () {
                $(this).remove();
            });
        });
    /*================================
    Smoth Scroll
    ==================================*/
    var links = $("nav ul li a[href^='#']");
    var topGap = 70;

    links.on("click", function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({
                    scrollTop: target.offset().top - topGap
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
        return false;
    });

    /*================================
       Wow Js
    ==================================*/
        new WOW({
            mobile: false
        }).init();
    /* ================== */


    /*================================
          Slicknav
       ==================================*/
        $('ul#navigation').slicknav({
            label: '',
            prependTo: "#mobile-menu"
        });

    /*================================
    stickey Header
    ==================================*/
    $(window).on("scroll", function () {
        activeMenuItem($(".nav-menu"));
    });
    //function for active menuitem
    function activeMenuItem($links) {
        var top = $(window).scrollTop(),
            windowHeight = $(window).height(),
            documentHeight = $(document).height(),
            cur_pos = top + 2,
            sections = $("section"),
            nav = $links

        sections.each(function () {
            var top = $(this).offset().top - 80,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find("> ul > li > a").parent().removeClass("active");
                nav.find("a[href='#" + $(this).attr('id') + "']").parent().addClass("active");
            } else if (cur_pos === 2) {
                nav.find("> ul > li > a").parent().removeClass("active");
            } else if ($(window).scrollTop() + windowHeight > documentHeight - 400) {
                nav.find("> ul > li > a").parent().removeClass("active");
            }
        });
    }

})(jQuery);
