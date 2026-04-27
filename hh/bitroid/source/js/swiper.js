var init = false;
var swiper;
function swiperCard() {
  if (window.innerWidth <= 600) {
    if (!init) {
      init = true;
      swiper = new Swiper(".recommendation__list", {
        direction: "horizontal",
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 32,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);

// const swiperRecommendations = new Swiper('.recommendation__list', {
//   // Optional parameters
//   enabled: false,
//   slidesPerView: 1,
//   spaceBetween: 30,
//   autoHeight: true, // слайдер подбирает свою высоту в зависимости от высоты слайла
//   direction: 'horizontal',
//   loop: false,
//   // точки навигации
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//     clickable: true,
//   },
//   breakpoints: {    
//     // when window width is >= 768px
//     // 768: {
//     //     slidesPerView: 2,
//     //     spaceBetween: 0        
//     // },
//     // 960: {       
//     //     spaceBetween: 30
//     // },
//     // 1600: {
//     //     slidesPerView: 3        
//     // }

//     // 768: {
//     //     slidesPerView: 2,
//     //     spaceBetween: 0,
//     //     width: 700, // ширина смещения слайдера
//     // },
//     // 960: {       
//     //     slidesPerView: 2,
//     //     spaceBetween: 30,
//     //     width: 800, // ширина смещения слайдера
//     // },
//     // 1200: {       
//     //     slidesPerView: 2,
//     //     spaceBetween: 30,
//     //     width: 800, // ширина смещения слайдера
//     // },
//     // 1400: {       
//     //     slidesPerView: 2,
//     //     spaceBetween: 30,
//     //     width: 800, // ширина смещения слайдера
//     // },
//     // 1600: {
//     //     slidesPerView: 3,
//     //     spaceBetween: 30,
//     //     width: 1314, // ширина смещения слайдера
//     // }
//   }
// });