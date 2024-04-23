document.addEventListener("DOMContentLoaded", function() {
  const heroSwiper = new Swiper('.hero__swiper', {
    allowTouchMove: false,
    loop: true,
    effect: 'fade',
    speed: 10000,
    autoplay: {
      delay: 10000
    }
  });
});

