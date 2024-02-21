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

const swiperProduction = new Swiper('.production__list', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 16,
  width: 304, // ширина смещения слайдера

  direction: 'horizontal',
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.production__pagination .next',
    prevEl: '.production__pagination .prev',
  },

  breakpoints: {    
    // when window width is >= 768px
    768: {
        slidesPerView: 2,
        spaceBetween: 24,
        width: 632, // ширина смещения слайдера
    },
    960: {       
        slidesPerView: 2,
        spaceBetween: 24,
        width: 724, // ширина смещения слайдера
    },
    1200: {       
        slidesPerView: 2,
        spaceBetween: 30,
        width: 866, // ширина смещения слайдера
    },
    1400: {       
        slidesPerView: 2,
        spaceBetween: 30,
        width: 866, // ширина смещения слайдера
    },
    1600: {
        slidesPerView: 3,
        spaceBetween: 30,
        width: 1314, // ширина смещения слайдера
    }
  }
});


const swiperInfo = new Swiper('.info__list', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 12,
  width: 314,
  autoHeight: true, // одинаковая высота слайдов

  direction: 'horizontal',
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.info__pagination .next',
    prevEl: '.info__pagination .prev',
  },

    // on: {
    //     init: function() {
    //         setSlidesHeight(this);
    //     },
    //     resize: function() {
    //         setSlidesHeight(this);
    //     }
    // },

  breakpoints: {    
    // when window width is >= 768px
    768: {
        slidesPerView: 2,
        spaceBetween: 24,
        width: 652, // ширина смещения слайдера
    },
    960: {       
        slidesPerView: 2,
        spaceBetween: 24,
        width: 724, // ширина смещения слайдера
    },
    1200: {       
        slidesPerView: 2,
        spaceBetween: 30,
        width: 866, // ширина смещения слайдера
    },
    1400: {       
        slidesPerView: 2,
        spaceBetween: 30,
        width: 866, // ширина смещения слайдера
    },
    1600: {
        slidesPerView: 3,
        spaceBetween: 30,
        width: 1314, // ширина смещения слайдера
    }
  }
});

/*function setSlidesHeight(swiperInstance) {
    var maxSlideHeight = 0;
    swiperInstance.slides.each(function() {
        var slideHeight = $(this).outerHeight();
        if (slideHeight > maxSlideHeight) {
            maxSlideHeight = slideHeight;
        }
    });
    swiperInstance.slides.css('height', maxSlideHeight);
}*/

