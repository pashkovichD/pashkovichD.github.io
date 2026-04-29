$('.recommendation__list').not('.slick-initialized').slick({
  mobileFirst: true,
  arrows: false,
  dots: true,
  responsive: [
     {
        breakpoint: 600,
        settings: "unslick"
     }
  ]
});

$('.include__list').not('.slick-initialized').slick({
  mobileFirst: true,
  arrows: false,
  dots: true,
  adaptiveHeight: true,
  slidesToShow: 1,
  speed: 300,
  responsive: [
     {
        breakpoint: 480,
        settings: "unslick"
     }
  ]
});

$('.projects__list').not('.slick-initialized').slick({
   infinite: true,
   slidesToShow: 3,
   draggable: true,
   arrows: true,
   dots: true,   
   responsive: [
      {
         breakpoint: 600,
         settings: {
            arrows: false,
            slidesToShow: 1
         }
      },
      {
         breakpoint: 1080,
         settings: {
            arrows: false,
            slidesToShow: 2
         }
      }
   ]
});

// $(window).resize(function(){
//   $('.recommendation__list')[0].slick.refresh();
//   $('.include__list')[0].slick.refresh();
//   $('.projects__list')[0].slick.refresh();
// });