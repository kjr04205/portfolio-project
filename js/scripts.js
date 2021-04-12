
$(function(){
  $('.year_wrap_second').click(function(){
      $('.portfolio_first_box').hide();
      $('.portfolio_second_box').show();
      $('.year_wrap_first').removeClass('cursorPointer');
      $('.year_wrap_second').addClass('cursorPointer');
  });

  $('.year_wrap_first').click(function(){
    $('.portfolio_second_box').hide();
    $('.portfolio_first_box').show();
    $('.year_wrap_second').removeClass('cursorPointer');
    $('.year_wrap_first').addClass('cursorPointer');
});
});

  (function($) {
  "use strict"; 

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 71)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  
  navbarCollapse();

  $(window).scroll(navbarCollapse);

  $(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

})(jQuery);

/* 텍스트 애니메이션 스크립트 */
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: 1})
.add({
  targets: '.ml6 .letter',
  translateY: ["2.5em", 0],
  translateZ: 0,
  duration: 1500,
  opacity:1,
  delay: (el, i) => 50 * i
});

const trigger = new ScrollTrigger.default({
  trigger: {
    once: true
  }
});
trigger.add('[data-trigger]');
