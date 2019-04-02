/* 메뉴바 FIXED */
if (jQuery(window).width() > 0) {
    jQuery(window).on("scroll",function(ev){
        if(jQuery(window).scrollTop() > 80 ) { /* 해당 높이를 벗어나면 fixed 클래스 추가 */
            jQuery('.menu_box').addClass('fixed');
        }
        else{
            jQuery('.menu_box').removeClass('fixed');
        }
        return false;
    });
}
/* 해당위치로 스크롤링 */
$(function(){
    $('a[href^=#]').click(function() {
        var speed = 500; /* 스크롤 속도 */
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
});


$(document).ready(function(){
    $(".sub_1").hide();
    $(".sub_2").hide();
    $(".sub_3").hide();
    $(".sub_4").hide();
    $(".sub_5").hide();
    $(".sub_6").hide();
    $(".sub_7").hide();
    $(".sub_8").hide();
    $(".sub_9").hide();
    $(".sub_10").hide();
    $(".sub_11").hide();

    $(window).scroll(function () { var scrollValue = $(document).scrollTop(); console.log(scrollValue); });

    $(window).on("scroll",function(){
        let top = $(window).scrollTop();
        if(top >= 1800)
            $(".sub_1").fadeIn();
    });
    $(window).on("scroll",function(){
        let top = $(window).scrollTop();
        if(top >= 1800)
            $(".sub_2").fadeIn();
    });
    $(window).on("scroll",function(){
        let top = $(window).scrollTop();
        if(top >= 1800)
            $(".sub_3").fadeIn();
    });
    $(window).on("scroll",function(){
        let top = $(window).scrollTop();
        if(top >= 1800)
            $(".sub_4").fadeIn();
    });
    $(window).on("scroll",function(){
        let top = $(window).scrollTop();
        if(top >= 700)
            $(".sub_5").fadeIn();
    });
    $(window).on("scroll",function(){
        let top = $(window).scrollTop();
        if(top >= 1000)
            $(".sub_6").fadeIn();
    });
    $(window).on("scroll",function(){
        let top = $(window).scrollTop();
        if(top >= 1000)
            $(".sub_7").fadeIn();
    });
    $(window).on("scroll",function(){
        let top = $(window).scrollTop();
        if(top >= 1200)
            $(".sub_8").fadeIn();
    });
    $(window).on("scroll",function(){
        let top = $(window).scrollTop();
        if(top >= 1000)
            $(".sub_9").fadeIn();
    });
    $(window).on("scroll",function(){
        let top = $(window).scrollTop();
        if(top >= 1000)
            $(".sub_11").fadeIn();
    });
});











