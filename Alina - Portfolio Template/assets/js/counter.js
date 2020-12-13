(function ($) {
    "use strict";


// Project Count js begin
    $(window).on('scroll', function() {
        counterUp($('#counter-area'))
    });

    function counterUp($area) {
        var a = 0;
        var oTop = $area.offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter_value').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }

                });
            });
            a = 1;
        }
    }


    })(jQuery);