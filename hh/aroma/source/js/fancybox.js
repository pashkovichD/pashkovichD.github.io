// $('.fancybox').fancybox({
//   helpers: {
//     overlay: {
//       locked: false
//     }
//   }
// });

// jQuery('.termi').fancybox({
Fancybox.bind('[data-fancybox]', {	
	animated: false,
	mainClass: 'fancybox__wrapper',
	// hideScrollbar: false,
	// closeButton: false,
	// helpers: {	
    //     overlay: { locked: false }
    // }
});

// $(document).ready(function() {
// 	$('[data-fancybox]').bind("click", function(e) {
// 		var anchor = $(this);
// 		$('html, body').stop().animate({
// 			scrollTop: $(anchor.attr('href')).offset().top
// 		}, 1000);
// 		e.preventDefault();
// 	});
// return false;