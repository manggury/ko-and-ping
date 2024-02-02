$(function () {
    $('#bgndVideo').YTPlayer({
        videoURL: 'TJ7tAZKqjW4',
        containment: '.visual_wrap',
        showControls: false,
        mute: true,
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {

        //             optimizeDisplay: true,
        //         }
        //     }
        // ]
    })


    $('.introduce_side').slick({
        arrows: true,
        slidesToShow: 4,
        dots: true,
        nextArrow: $('.arrow .right'),
        prevArrow: $('.arrow .left'),
        responsive: [
            {
                breakpoint: 800, //
                settings: {
                    slidesToShow: 3
                }

            },
            {
                breakpoint: 600, // 600px 이하에서 적용
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 400, // 600px 이하에서 적용
                settings: {
                    slidesToShow: 1
                }
            }
            // 추가적인 미디어 쿼리 설정 가능
        ],

    });
    $('.mopen').on('click', function () {
        $('.gnb').toggleClass('on');
        $(this).find('.hamburger').toggleClass('is-active');
    })
});