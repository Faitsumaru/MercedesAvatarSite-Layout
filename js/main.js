$(function(){

    $('.header__nav').on('click', function() {
        $('.header__nav').toggleClass('header__nav--active');
        $('.menu__dropdown-list').toggleClass('menu__dropdown-list--active');

        //change img on burger
        var img = 'images/menu-btn.svg';
        var activeImg = 'images/menu-btn--active.svg';
        $('.header__nav-img').attr("src", $('.header__nav-img').attr("src") === img ? activeImg : img);
    });

    //video playing
    var vid = $('.popup-vid'); 
    vid.magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    // var vid = $('video');
    // $('.video__play-btn').on('click', function() {
    //     vid.toggleClass('vid--active');
    //     vid.attr("controls");
    // });

    //slider
    $('.design-slider').slick({
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        prevArrow: '<img src="images/arrow-left.svg" class="arrow arrow-left">',
        nextArrow: '<img src="images/arrow-right.svg" class="arrow arrow-right">',
    });

    //scroll-up btn
    $(window).scroll(function() { //smooth fading scroll
        if ($(this).scrollTop()) {
            $('.scroll-btn').fadeIn();
        } else {
            $('.scroll-btn').fadeOut();
        }
    });
    $('.scroll-btn').click(function() { //scroll-up btn click func
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });

});