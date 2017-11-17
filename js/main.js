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

        //Search option
        $('.option-value').click(function () {

            var dropdown = $(this).parent().find('.search-dropdown');
            if ($(dropdown).is(":visible")) {
                $(dropdown).slideUp();
            } else {
                $(dropdown).slideDown();
            }



        });

        $('.search-dropdown a').click(function () {
            $('.search-dropdown').slideUp();
        });

        $('.open-test-right').click(function () {
            $('body').addClass("show-test-right");
        });
        $('.close-test-right').click(function () {
            $('body').removeClass("show-test-right");
        });

        //show test-button
        $('.box-answer').click(function () {
            $('body').addClass("show-test-bottom");
        });
        $('.close-test-bottom').click(function () {
            $('body').removeClass("show-test-bottom");
        });

        //menu user

        $('.user-info').click(function () {
            $('.user-panel').toggleClass("show-user-menu");
        });

    });
})(jQuery);
