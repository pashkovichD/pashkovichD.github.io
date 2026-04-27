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

// $(document).ready(function(){
//   $('.recommendation__list').slick({
//     settings: "unslick",
//     infinite: false,
//     dots: true
//   });
// });

// if (window.innerWidth > 600) {
//   $('.recommendation__list').slick('unslick');
//   sliderIsLive = false;
// }
// else {
//   if (sliderIsLive) {
//     $('.recommendation__list').slick();
//     sliderIsLive = true;
//   }
// }

// window.addEventListener("resize", function() {
//   if (window.innerWidth > 600) {
//     $('.recommendation__list').slick('unslick');    
//   }
//   else {    
//       $('.recommendation__list').slick({
//          mobileFirst: true,
//          arrows: false,
//          responsive: [
//             {
//                breakpoint: 600,
//                settings: "unslick"
//             }
//          ]
//       });
//   }
// });