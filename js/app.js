function post(t, e, o) { return $.ajax({ type: 'POST', url: t, data: e, success: o, dataType: 'json' }) }

const formatPrice = (x) => {
    return x.toString().replace(/\s/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
$().ready(function () {
    $('.es-main-slider').slick({
        dots: true, infinite: false, speed: 300, slidesToShow: 1, slidesToScroll: 1, // prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"></button>',
        // nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"></button>',
        // responsive: [{
        //     breakpoint: 1024, settings: {
        //         slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: true
        //     }
        // }, {
        //     breakpoint: 600, settings: {
        //         slidesToShow: 2, slidesToScroll: 1
        //     }
        // }, {
        //     breakpoint: 480, settings: {
        //         slidesToShow: 1, slidesToScroll: 1
        //     }
        // }]
    })
    $('.es-second-slider').slick({
        dots: true, infinite: false, speed: 300, slidesToShow: 1, slidesToScroll: 1,
    })
    $('.es-sale-product-slider').slick({
        dots: true, infinite: false, speed: 300, slidesToShow: 3, slidesToScroll: 1,// prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"></button>',
        // nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"></button>',
        responsive: [{
            breakpoint: 1024, settings: {
                slidesToShow: 1, slidesToScroll: 1, infinite: true
            }
        }, {
            breakpoint: 600, settings: {
                slidesToShow: 2, slidesToScroll: 1
            }
        }, {
            breakpoint: 480, settings: {
                slidesToShow: 1, slidesToScroll: 1, dots: false,arrows: false,centerMode: true,
                centerPadding: '5%',
            }
        }]
    })



    $(window).on('scroll', function () {
        $scrollTop = $(window).scrollTop(), t = $('#back-top'), $scrollTop > 350 ? t.addClass('visible') : t.removeClass('visible')
    })
    let t = $('#back-top')
    $htmlBody = $('html, body'), t.length && t.on('click', function (t) {
        $htmlBody.animate({ scrollTop: 0 }, 200), t.preventDefault()
    })
})



