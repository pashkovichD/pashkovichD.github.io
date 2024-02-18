const swiper = new Swiper('.tverdomery', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 30,

  direction: 'horizontal',
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.pagination__tverdomery .next',
    prevEl: '.pagination__tverdomery .prev',
  },

  breakpoints: {    
    // when window width is >= 768px
    768: {
        slidesPerView: 2,
        spaceBetween: 0        
    },
    960: {       
        spaceBetween: 30
    },
    1600: {
        slidesPerView: 3        
    }
  }
});

const swiperMery = new Swiper('.mery', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 30,

  direction: 'horizontal',
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.pagination__mery .next',
    prevEl: '.pagination__mery .prev',
  },

  breakpoints: {    
    // when window width is >= 768px
    768: {
        slidesPerView: 2,
        spaceBetween: 0        
    },
    960: {       
        spaceBetween: 30
    },
    1600: {
        slidesPerView: 3        
    }
  }
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