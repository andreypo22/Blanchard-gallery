document.addEventListener("DOMContentLoaded", function() {

  const eventsSwiper = new Swiper('.events__swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 40,

    navigation: {
      nextEl: '.events__swiper-next',
      prevEl: '.events__swiper-prev',
    },

    pagination: {
      el: '.events__swiper-pagination',
      type: 'bullets',
      clickable: true
    },

    breakpoints: {
      577: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },

      921: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 27
      },

      1281: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      }
    }

  });

});

