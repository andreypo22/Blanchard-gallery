document.addEventListener("DOMContentLoaded", function() {

  tippy('.projects__tooltip-btn', {
    delay: 100,
    duration: 100,
    inlinePositioning: true,
    maxWidth: 264,
    offset: [0, 5],
    theme: 'custom',
    arrow: true,
    placement: 'top',
    trigger: 'click',
  });

});
