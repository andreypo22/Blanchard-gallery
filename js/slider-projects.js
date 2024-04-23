document.addEventListener("DOMContentLoaded", function() {

  const projectsSwiper = new Swiper('.projects__swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 21,

    navigation: {
      nextEl: '.projects__swiper-next',
      prevEl: '.projects__swiper-prev',
    },

    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    },

    breakpoints: {
      577: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },

      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50
      },

      1281: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      }
    }

  });

});

