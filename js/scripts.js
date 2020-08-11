$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        arrows: false,
        easing: 'linear',
        infinite: false,
        autoplay: false, 
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        swipe: true,
        });
    function ibg(){

$.each($('.ibg'), function(index, val) {
if($(this).find('img').length>0){
$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
}
});
}

ibg();
    
     $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    
});
