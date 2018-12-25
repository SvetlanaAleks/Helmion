
//Some JS
let slider1 = $('.parasites-slider');

function initSlider(slider, options) {
    slider.on('init', function () {
        setTimeout(function () {
            slider.addClass('is-ready');
        }, 100);
    });
    slider.not('.slick-initialized').slick(options);
}


function destroySlider(slider) {
    if (slider.hasClass('slick-initialized')) {
        slider.slick('unslick');
    }
}

function showSlider() {
    var tablet = ($(window).width()) < 1024;
    if (tablet) {
        initSlider(slider1, {
            variableWidth: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,

                    slidesToScroll: 1
                }
            },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,

                        slidesToScroll: 1
                    }
                }
            ]
        });
    } else {
        destroySlider(slider1);
    }
}

showSlider();
$(window).on('resize', showSlider);


// let slider1 = $('.parasites-slider');
//
//
// function initSlider(slider, options) {
//     slider.on('init', function () {
//         setTimeout(function () {
//             slider.addClass('is-ready');
//         }, 100);
//     });
//     slider.not('.slick-initialized').slick(options);
// }
//
// function destroySlider(slider) {
//     if (slider.hasClass('slick-initialized')) {
//         slider.slick('unslick');
//     }
// }
//
// function showSlider() {
//     var tablet = ($(window).width()) < 1024;
//     if (tablet) {
//         initSlider(slider1, {
//             responsive: [{
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//
//                     slidesToScroll: 1
//                 }
//             },
//                 {
//                     breakpoint: 768,
//                     settings: {
//                         slidesToShow: 1,
//
//                         slidesToScroll: 1
//                     }
//                 }
//             ]
//         });
//     } else {
//         destroySlider(slider1);
//     }
// };
// showSlider();
// $(window).on('resize', showSlider);


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

