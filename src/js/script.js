$('.banner-slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [

    ]
});

$('.food-slider-banket').slick({
  dots: false,
  arrows: true,
  infinite: false,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [

  ]
});

ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [45.0443737112002,41.970678414680485],
          zoom: 18
      }, {
          searchControlProvider: 'yandex#search'
      });

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: '',
          balloonContent: 'Ставрополь, улица Дзержинского, 114 '
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          // iconImageHref: '/design/img/map-point.svg',
          // Размеры метки.
          iconImageSize: [42, 55],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-21, -55]
      });

  myMap.geoObjects.add(myPlacemark);
});
