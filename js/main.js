$(function(){

    $('.header__nav').on('click', function(){
        $('.header__nav').toggleClass('header__nav--active');
        $('.menu__dropdown-list').toggleClass('menu__dropdown-list--active');

        //change img on burger
        var img = 'images/menu-btn.svg';
        var activeImg = 'images/menu-btn--active.svg';
        $('.header__nav-img').attr("src", $('.header__nav-img').attr("src") === img ? activeImg : img);
        $(this).css({
            transition: '.4s linear'
        });
    });

});