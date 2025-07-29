(function ($) {
  "use strict";
  ////Logos
  var swiper = new Swiper(".mySwiper.logos", {
    slidesPerView: 2,
    spaceBetween: 50,
    speed: 8000, 
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      765: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 6,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  ////category
  var swiper = new Swiper(".mySwiper.one-slider", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
})(jQuery);



