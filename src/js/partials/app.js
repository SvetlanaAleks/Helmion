
//Some JS
function triggerSlider() {
    let slider = $('.parasites-slider');
    let breakpoint = ($(window).width()) <= 1023;
    if (breakpoint && !slider.hasClass('slick-initialized')) {
        slider.slick({
            autoplay: false,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
            ]
        });
    } else if (!breakpoint && slider.hasClass('slick-initialized')) {
        slider.slick('unslick');
    }
}

triggerSlider();

$(window).on('resize', triggerSlider);

const App = (function () {
   "use strict";
   return {
      scrollToTarget: function (scrollSelector, speed) {
         const links = $(scrollSelector);
         links.click(function (e) {
            e.preventDefault();
            const _this = $(this);
            const href = _this.attr('href');
            if (href.length <= 1) {
               return;
            }
            const target = $(href);
            if (!target.length) {
               return;
            }
            const top = target.offset().top;
            $('html, body').animate({
               scrollTop: top
            }, speed);
         });
      },
      init: function () {
         App.scrollToTarget('.js-scroll', 700);
      },
   };
})();

