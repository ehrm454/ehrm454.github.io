$(document).ready(function () {
    $('body').css('opacity','1');

    var width = parseInt($('body').css('width'));

      if(width>820) {


          $(".ppt_contents").css("height", "auto");


          var height = $('.banner_out_left').css("height");
          $(".banner_out_left img").css("max-height", height);
          var ppt_height = $(".ppt_img2 img").css("height");
          $(".ppt_contents").css("height", ppt_height);
          $('#banner_img1 img , #banner_img2 img , #banner_img3 img , .intro_me , .skill_intro').hide();

          $('.hover_1').hover(function () {
          });
          $('.hover_2').hover(function () {
              $('.intro_me').stop().show(500);
          });
          $('.hover_3').hover(function () {
              $('#skills , .skill_intro').stop().show(500);
          });
          $('.hover_4').hover(function () {
              $('#banner_img1 img').stop().show(500);
          });
          $('.hover_5').hover(function () {
              $('#banner_img2 img').stop().show(500);
          });
          $('.hover_6').hover(function () {
              $('#banner_img3 img').stop().show(500);
          });


          $('.hover_1').mouseleave(function () {
          });
          $('.hover_2').mouseleave(function () {
              $('.intro_me').stop().hide(500);
          });
          $('.hover_3').mouseleave(function () {
              $('#skills').stop().hide(500);
          });
          $('.hover_4').mouseleave(function () {
              $('#banner_img1 img').stop().hide(500);

          });
          $('.hover_5').mouseleave(function () {
              $('#banner_img2 img').stop().hide(500);
          });
          $('.hover_6').mouseleave(function () {
              $('#banner_img3 img').stop().hide(500);
          });


          $('nav a, .top > a ').click(function () {
              $('html, body').animate({
                  scrollTop: $($.attr(this, 'href')).offset().top
              }, 500);
              return false;
          });
      }




});
