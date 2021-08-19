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


document.querySelectorAll('.slider-img-popup').forEach(function (elem) {
   new Swiper(elem, {
      navigation: {
         nextEl: '.slider-img-popup__btn-next',
         prevEl: '.slider-img-popup__btn-back',
      },
      grabCursor: false, //  курсор-рука
      slidesPerView: '1', //кол-во показываемых слайдов
      watchOverflow: true, //если слайдов мало, - слайдер отключается
      spaceBetween: 0, // отступы между слайдами
      // loop: true,
      // slideToClickedSlide: true,
      // simulateTouch: true,
   });
});


// $(document).ready(function () {
//    $('.lazy').Lazy({
//       effect: "fadeIn",
//       effectTime: 2000,
//       // delay: 100,
//       threshold: 0,
//       // placeholder: "data:image/gif;base64,R0lGODlhEALAPQAPzl5uLr9Nrl8e7..."

//       // placeholder: "data:images/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAbCAYAAAAdx42aAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEPSURBVHgBvdbBDYJAFEXRBxJXLqADWmFpFVgaVuFGg1YiHSCJC6MBnY9IAAcGhj+8hIhs7glBA7DQ0gN8OrrXLSwwCq/WiOk8fyLwtkgWAzTifnUpaSKMAiRxdBHGAAPxFsIIYET8OwtndsDY+FvcgcJmvgNT417A+AzoxOk7C0A3LgXcY4T0uQmwh+E4zenGiwJRda5EzI3TLFn8N9vGrg/BEa8BsvgQgiteAobiMgRnnObkufgzUPwWCEjPxOuBC2ecVqazIyKBCKHeTRwumOI1YCKCLd4CzEXoxP8AugjduBQwFTEn3gsYi5gbHwSoEBxxJaAPwRUfBegiOOOTRojshGsaK97zTE7EXTDvA8ss0d21F3guAAAAAElFTkSuQmCC"
//    });

// });

$('.lazy').Lazy();

var $easyzoom = $('.easyzoom').easyZoom();


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

// popup
$('.btn-popup').on('click', function () {
   $('.popup').fadeIn();
})
//нажатие вне body
$(document).on('click', function (e) {
   if (!$(e.target).closest(".popup__content").length && !$(e.target).closest(".btn-popup").length) {
      $('.popup').fadeOut();
   }
   e.stopPropagation();
});
$('.popup-close').on('click', function () {
   $('.popup').fadeOut();
})
//нажатие вне body
//popup end


$.gulp.task('scripts-lib', () => {
   return $.gulp.src(['node_modules/...'])
      .pipe($.gulp.dest('build/libs/js'))
})