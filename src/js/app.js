;(function( window, undefined ){ 
 'use strict'; 
var $header = $('.header');

$(window).scroll(function(){
    if ( $(this).scrollTop() > 660){
        $header.addClass('menu-grey');
    } else if($(this).scrollTop() <= 660) {
        $header.removeClass('menu-grey');
    }
});

var $dropdownLink = $('.js-dropdown__link');

$dropdownLink.on('click', function(e) {
    e.preventDefault();
    $('.portfolio-block__list').toggleClass('portfolio-block__list-open');
});

$('.js-dropdown__list').on('click','.list__item-link', function(e) {
   var $elem = $(this);
    $dropdownLink.html($elem.html() + '<b class="caret"></b>');
   $('.portfolio-block__list').removeClass('portfolio-block__list-open');
});

$('.js-nav__list').on('click', '.js-list-item__link', function(e) {
    e.preventDefault();
    var $attr = $(this).attr('href');
    console.log($attr);

});

}( window ));