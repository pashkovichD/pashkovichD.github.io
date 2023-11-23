const swiper = new Swiper('.projects__list', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.projects__pagination .next',
    prevEl: '.projects__pagination .prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

const swiperImg = new Swiper('.projects__item-images', {
  // Optional parameters  
  loop: true,
  effect: 'fade',

  // If we need pagination
  // pagination: {
  //   el: '.termi',

  // },

  pagination: {
    el: '.projects__images-dots',
    clickable: true,
  },

  //Navigation arrows
  // navigation: {
  //   nextEl: '.img-next',
  //   prevEl: '.img-next',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});