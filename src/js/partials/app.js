//Some JS
var slider1 = $('.parasites-slider');

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
            responsive: [{
                breakpoint: 1023,
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
};
showSlider();

$(window).on('resize', showSlider);
