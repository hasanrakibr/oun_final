$(function(){
  $('.count-num').rCounter({
    duration: 30
  });
});


$(document).ready(function () {


  $(window).scroll(function () {

    if ($(this).scrollTop() > 150) {

      $(".navbar").addClass("menu-bg")
    }

  })



})

      scrollTop in show and hide
      $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
          $(".scrollTop").fadeIn(1000)
        } else {
          $(".scrollTop").fadeOut(1000)
        }
      })


    

  