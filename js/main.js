(function ($) {
    $(document).on('ready', function () {
        "use strict";
        /**Preload**/
        $('#page-loader').delay(800).fadeOut(600, function () {
            $('body').fadeIn();
        });
        /** slider**/
        var owl_home = $('.owl-home')
        $(owl_home).owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            autoplay: true,
            autoplayTimeout: 4000,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 2
                },
                992: {
                    items: 3
                },

                1200: {
                    items: 4
                }
            }

        });

        /** slider**/
        var owl_cate_slider = $('.owl-cate-slider')
        $(owl_cate_slider).owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            autoplay: true,
            autoplayTimeout: 4000,
            items: 1

        });


        /** slider qrcode**/
        var owl_qr = $('.owl-qr')
        $(owl_qr).owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            autoplay: true,
            autoplayTimeout: 4000,
            items: 1

        });

        //Search option
        $('.option-value').click(function () {

            var dropdown = $(this).parent().find('.search-dropdown');
            if ($(dropdown).is(":visible")) {
                $(dropdown).slideUp();
            } else {
                $(dropdown).slideDown();
            }



        });

        //switch view

        $('.cl-switch span').click(function () {
            $('.view-active').removeClass('view-active');
            $(this).addClass("view-active");
            $('.view-style').hide();
            var id = $(this).attr("data-id");
            $(id).show();


        });

        $('.search-dropdown a').click(function () {
            $('.search-dropdown').slideUp();
        });

        //accdion

        var caption = $('.acc-caption');
        $(caption).click(function () {

            var content = $(this).next();

            if ($(content).is(":visible")) {
                $(content).slideUp();
            } else {
                $(content).slideDown();
            }

        });

    });
})(jQuery);
