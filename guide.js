$(function(){
  $(window).scroll(function (){
      $('.effect-fade').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight+ 65){
              $(this).addClass('effect-scroll');
          }
      });
  });
  });