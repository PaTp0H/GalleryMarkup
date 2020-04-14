$(document).ready(function() {
    var gallerySlider = new Swiper('.gallery__container', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: '.gallery__container-pagination',
          clickable: true,
          type: 'fraction',
          renderFraction: function (currentClass, totalClass) {
            return '<span class="gallery__container-pagination--number ' + currentClass + '"></span>' +
                    '<span class="gallery__container-pagination-line"></span>' +
                    '<span class="gallery__container-pagination--number ' + totalClass + '"></span>';
          },
          formatFractionCurrent: function (number) {
            return number < 10 ? '0'+number : number;
          },
          formatFractionTotal: function (number) {
            return number < 10 ? '0'+number : number;
          }
        },
        navigation: {
          nextEl: '.gallery__container-arrow.right',
          prevEl: '.gallery__container-arrow.left',
        },
      });
})