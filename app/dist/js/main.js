// const { default: Swiper } = require("swiper");

document.querySelectorAll('.slider-img__container').forEach(function (elem) {
   new Swiper(elem, {
      navigation: {
         nextEl: '.slider-img__btn-next',
         prevEl: '.slider-img__btn-back',
      },
      grabCursor: false, //  курсор-рука
      slidesPerView: '1', //кол-во показываемых слайдов
      watchOverflow: true, //если слайдов мало, - слайдер отключается
      spaceBetween: 20, // отступы между слайдами
      loop: true,
      slideToClickedSlide: false,
      simulateTouch: false,
   });
});




var lazyLoadInstance = new LazyLoad({
   // Your custom settings go here
});

if ($(window).width() >= 1024) {
   $('.easyzoom').easyZoom();
}




$(function () {
   $('.popup-modal').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#username',
      modal: true,
      callbacks: {
         open: function () {
            var swiper = new Swiper('.slider-img-popup', {
               navigation: {
                  nextEl: '.slider-img-popup__btn-next',
                  prevEl: '.slider-img-popup__btn-back',
               },
               grabCursor: false, //  курсор-рука
               slidesPerView: '1', //кол-во показываемых слайдов
               watchOverflow: true, //если слайдов мало, - слайдер отключается
               spaceBetween: 0, // отступы между слайдами
            });
         },
         close: function () {
            // Will fire when popup is closed
         }
      }
   });
   $(document).on('click', '.popup-modal-dismiss', function (e) {
      e.preventDefault();
      $.magnificPopup.close();
   });
});