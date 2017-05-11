$(document).ready(function(){
  var altura = $('.jumbotron').offset().top;

  $(window).on('scroll', function(){
      if ($(window).scrollTop() > altura) {
          $('.jumbotron').addClass('jumbotron-fixed');
      }else{
          $('.jumbotron').removeClass('jumbotron-fixed');
      }
  });
});