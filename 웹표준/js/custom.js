$('.tit .btn').click(function(e){
    e.preventDefault();
    // $('#cont_nav').css('display','block');
    // $('#cont_nav').show();
    // $('#cont_nav').fadeIn();
    // $('#cont_nav').slideDown();
    // $('#cont_nav').toggle();
    // $('#cont_nav').fadeToggle();
    $('#cont_nav').slideToggle(200);
    $(this).toggleClass('on');
});

// ::::: banner slide ::::: //
$('.ban').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay:true,
    autoplaySpeed:3000,
    dots:true
});

// ::::: 갤러리 ::::: //
$('.gallery_img').slick({
    arrows  :false,
});

//:::: tab menu ::::: //
var $tab_list = $('.tab_menu');
$tab_list.find('ul ul').hide();
$tab_list.find('li.active > ul').show();

function tabMenu(e){
    e.preventDefault(); 
    var $this = $(this);
    $this.next('ul').show().parent('li').addClass('active').siblings('li').removeClass('active').find('>ul').hide();
}
$tab_list.find('ul>li>a').click(tabMenu).focus(tabMenu);