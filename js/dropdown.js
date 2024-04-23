document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".header__bottom-btn").forEach(item => {
    item.addEventListener("click", function() {
      let dropdown = this.parentElement.querySelector(".header__bottom-back");
      let svgArrow = this.parentElement.querySelector(".header__bottom-arrow");
      let btnActive = this.parentElement.querySelector(".header__bottom-btn");

      document.querySelectorAll(".header__bottom-back").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("header__bottom-dropdown--active");
        };
      });
      document.querySelectorAll(".header__bottom-arrow").forEach(el => {
        if (el != svgArrow) {
          el.classList.remove("header__bottom-arrow--active");
        };
      });
      document.querySelectorAll(".header__bottom-btn").forEach(el => {
        if (el != btnActive) {
          el.classList.remove("header__bottom-btn--active");
        };
      });
      dropdown.classList.toggle("header__bottom-dropdown--active");
      svgArrow.classList.toggle("header__bottom-arrow--active");
      btnActive.classList.toggle("header__bottom-btn--active");
    });
  });

  document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".header__bottom-item")) {
      document.querySelectorAll(".header__bottom-back").forEach(el => {
          el.classList.remove("header__bottom-dropdown--active");
      });
      document.querySelectorAll(".header__bottom-arrow").forEach(el => {
        el.classList.remove("header__bottom-arrow--active");
      });
      document.querySelectorAll(".header__bottom-btn").forEach(el => {
        el.classList.remove("header__bottom-btn--active");
      });
    };
  });
});
