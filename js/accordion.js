$(function() {
  $(".accordion").accordion( {
    active: 0,
    heightStyle: "content",
    collapsible: true,
    icons: false
  });
  document.querySelectorAll(".catalog__content").forEach(item => {
    let btns = item.querySelectorAll(".catalog__right-link");
    let articles = item.querySelectorAll(".catalog__left-item");
    btns.forEach(el => {
      el.addEventListener("click", function(e) {
        let path = e.currentTarget.dataset.path;
        let tabCont = item.querySelector(`[data-target='${path}']`);
        // console.log(tabCont);
        articles.forEach(el => {
          el.classList.remove("catalog__left-item-active");
        });
        btns.forEach(el => {
          el.classList.remove("catalog__right-link-active");
        });
        tabCont.classList.add("catalog__left-item-active");
        this.classList.add("catalog__right-link-active");
      });
    });
    let rightHead = item.querySelectorAll(".catalog__right-head");
  });
})

