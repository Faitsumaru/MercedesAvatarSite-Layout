$(function(){ //jQuery

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
        responsive: [
            {
                breakpoint: 431,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                }
            }
        ]
    });

    //scroll-up btn
    $(window).scroll(function() { //smooth fading scroll
        if ($(this).scrollTop()) {
            $('.scroll-btn').fadeIn();
            //$('.scroll-btn').css("display", "none");
            //$('.scroll-btn').hide();
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

window.onload = function() { //JS

//animation through positioning (relative & absolute):
    var pos = 0;
    var text = document.getElementById('header_icon');
    var time = setInterval(slide_down, 20);

    function slide_down() {
        if(pos >= 10) {
            clearInterval(time);
        }
        else {
            pos += 1;
            text.style.bottom = pos + "px";
        }
    }

};

//animation with page scrolling:
//у каждого объекта с классом '._animate' при достижении скроллом 1/4 высоты объекта (или высоты окна браузера [если объект > разм. экрана]), добавляется класс '_active', если недокрутили или перекрутили, то класс убирается
const animItems = document.querySelectorAll('._animate');

if(animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                animItem.classList.remove('_active');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
    animOnScroll();
}