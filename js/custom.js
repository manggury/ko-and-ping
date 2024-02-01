$(function () {
    $('#bgndVideo').YTPlayer({
        videoURL: 'TJ7tAZKqjW4',
        containment: '.visual_wrap',
        showControls: false,
        mute: true,
    })


    $('.introduce_side').slick({
        arrows: true,
        slidesToShow: 4,
        dots: true,
        nextArrow: $('.arrow .right'),
        prevArrow: $('.arrow .left'),
        responsive: [
            {
                breakpoint: 800, // 600px 이하에서 적용
                settings: {
                    slidesToShow: 2
                }
            }
            // 추가적인 미디어 쿼리 설정 가능
        ]
    });
});