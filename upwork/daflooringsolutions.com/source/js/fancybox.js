jQuery(document).ready(function($) {	
	/* This is basic - uses default settings */
	
	// $("a#single_image").fancybox();
	
	/* Using custom settings */
	
	// $("a#inline").fancybox({
	// 	'hideOnContentClick': true
	// });

	/* Apply fancybox to multiple items */
	
	$(".gallery__list li a").fancybox({
		'loop'          :   true,		
		'zoomOpacity'			: true		
	});
});