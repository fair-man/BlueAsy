;(function( window, undefined ){ 
 'use strict'; 
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

}( window ));