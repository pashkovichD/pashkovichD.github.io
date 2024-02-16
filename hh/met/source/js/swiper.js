const swiper = new Swiper('.products__list', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 30,

  direction: 'horizontal',
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.products__pagination .next',
    prevEl: '.products__pagination .prev',
  },
});

const swiperImg = new Swiper('.products__item-images', {
  // Optional parameters  
  loop: true,
  effect: 'fade',

  pagination: {
    el: '.products__images-dots',
    clickable: true,
  },
});