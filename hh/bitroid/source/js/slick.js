function slickRecommendation() {
   $('.recommendation__list').not('.slick-initialized').slick({
     mobileFirst: true,
     draggable: true,
     arrows: false,
     dots: true,
     responsive: [
        {
           breakpoint: 600,
           settings: "unslick"
        }
     ]
   });   
}


// $('.include__list').not('.slick-initialized').slick({
//   // mobileFirst: true,
//   settings: "unslick",
//   responsive: [
//      {
//         breakpoint: 480,
//         settings: {
//            draggable: true,
//            arrows: false,
//            dots: true,  
//            slidesToShow: 1,
//            speed: 300
//         }
//      }
//   ]
// });

function slickInclude() {
   $('.include__list').not('.slick-initialized').slick({
     mobileFirst: true,
     draggable: true,
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
}

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

slickRecommendation();
slickInclude();

$(window).resize(function() {
   slickRecommendation();
   slickInclude();
   location.reload(true);
  // $('.recommendation__list')[0].slick.refresh();
  // $('.include__list')[0].slick.refresh();
  // $('.projects__list')[0].slick.refresh();
});

// $(window).on('resize orientationchange', function() {
//   $('.include__list').slick('resize');
// });