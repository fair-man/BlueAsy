var $header = $(".header");

$(window).scroll(function(){
    if ( $(this).scrollTop() > 660){
        $header.addClass("menu-grey");
    } else if($(this).scrollTop() <= 660) {
        $header.removeClass("menu-grey");
    }
});

$('.js-dropdown__link').on('click', function(e) {
    e.preventDefault();
    $('.portfolio-block__list').toggleClass('portfolio-block__list-open');
});

$('.js-dropdown__list').on('click','.list__item-link', function(e) {
   var $elem = $(this);
   $('.js-dropdown__link').html($elem.html());
});
