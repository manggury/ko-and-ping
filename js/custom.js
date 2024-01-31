$(function () {
    $('#bgndVideo').YTPlayer({
        videoURL: 'TJ7tAZKqjW4',
        containment: '.visual_wrap',
        showControls: false,
    })


    $('.introduce_side').slick({
        arrows: true,
        slidesToShow: 4,
        dots: true,
        nextArrow: $('.arrow .right'),
        prevArrow: $('.arrow .left'),
    });
});