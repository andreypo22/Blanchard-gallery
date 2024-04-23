document.addEventListener("DOMContentLoaded", function() {
  const element = document.querySelector('.select');
  const choices = new Choices(element, {
    position: 'bottom',
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
    duplicateItemsAllowed: false,
    silent: false,
  });

  ymaps.ready(init);
  function init(){
    const myMap = new ymaps.Map("map", {
      center: [55.75846806898367, 37.60108849999989],
      zoom: 14,
      controls: ['zoomControl', 'geolocationControl'],
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "auto",
      geolocationControlPosition:  { top: "350px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "270px", right: "20px" }
    }
    );
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Леонтьевский переулок 5/1',
    },
    {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-marker.svg',
      iconImageSize: [20,20],
    }),
    myMap.geoObjects.add(myPlacemark)
    myMap.behaviors.disable('scrollZoom')
  };
});
