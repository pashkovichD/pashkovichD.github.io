const swiper = new Swiper('.projects__list', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.projects__pagination .next',
    prevEl: '.projects__pagination .prev',
  },
});

const swiperImg = new Swiper('.projects__item-images', {
  // Optional parameters  
  loop: true,
  effect: 'fade',

  pagination: {
    el: '.projects__images-dots',
    clickable: true,
  },
});