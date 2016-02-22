var $header = $(".header");

$(window).scroll(function(){
    if ( $(this).scrollTop() > 660){
        $header.addClass("menu-white");
    } else if($(this).scrollTop() <= 660) {
        $header.removeClass("menu-white");
    }
});
