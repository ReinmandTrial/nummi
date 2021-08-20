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


// document.querySelectorAll('.slider-img-popup').forEach(function (elem) {
//    new Swiper(elem, {
//       navigation: {
//          nextEl: '.slider-img-popup__btn-next',
//          prevEl: '.slider-img-popup__btn-back',
//       },
//       grabCursor: false, //  курсор-рука
//       slidesPerView: '1', //кол-во показываемых слайдов
//       watchOverflow: true, //если слайдов мало, - слайдер отключается
//       spaceBetween: 0, // отступы между слайдами
//       // loop: true,
//       // slideToClickedSlide: true,
//       // simulateTouch: true,
//    });
// });


// $(document).ready(function () {
//    $('.lazy').Lazy({
//       scrollDirection: 'vertical',
//       effect: "fadeIn",
//       effectTime: 200,
//       // delay: 100,
//       threshold: 0,
//       // placeholder: "data:image/gif;base64,R0lGODlhEALAPQAPzl5uLr9Nrl8e7..."

//       placeholder: "data:images/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAbCAYAAAAdx42aAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEPSURBVHgBvdbBDYJAFEXRBxJXLqADWmFpFVgaVuFGg1YiHSCJC6MBnY9IAAcGhj+8hIhs7glBA7DQ0gN8OrrXLSwwCq/WiOk8fyLwtkgWAzTifnUpaSKMAiRxdBHGAAPxFsIIYET8OwtndsDY+FvcgcJmvgNT417A+AzoxOk7C0A3LgXcY4T0uQmwh+E4zenGiwJRda5EzI3TLFn8N9vGrg/BEa8BsvgQgiteAobiMgRnnObkufgzUPwWCEjPxOuBC2ecVqazIyKBCKHeTRwumOI1YCKCLd4CzEXoxP8AugjduBQwFTEn3gsYi5gbHwSoEBxxJaAPwRUfBegiOOOTRojshGsaK97zTE7EXTDvA8ss0d21F3guAAAAAElFTkSuQmCC"
//    });

// });

// $('.lazy').Lazy();

var lazyLoadInstance = new LazyLoad({
   // Your custom settings go here
});

if ($(window).width() >= 1024) {
   $('.easyzoom').easyZoom();
}



// [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) { img.setAttribute('src', img.getAttribute('data-src')); img.onload = function() { img.removeAttribute('data-src'); }; }); 
// $(function () {
//    // $("img.lazy").Lazy({
//    //    threshold: 0,
//    //    effect: 'fadeIn',
//    //    effectTime: 2500
//    // });

//    $('.lazy').Lazy({
//       // threshold: 0,
//       // effect: 'fadeIn',
//       effectTime: 2500
//    });
// })


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
            // document.querySelectorAll('.slider-img-popup').forEach(function (elem) {
            //    new Swiper(elem, {
            //       navigation: {
            //          nextEl: '.slider-img-popup__btn-next',
            //          prevEl: '.slider-img-popup__btn-back',
            //       },
            //       grabCursor: false, //  курсор-рука
            //       slidesPerView: '1', //кол-во показываемых слайдов
            //       watchOverflow: true, //если слайдов мало, - слайдер отключается
            //       spaceBetween: 0, // отступы между слайдами
            //    });
            // });
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

