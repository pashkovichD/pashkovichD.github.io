jQuery(document).ready(function($) {
	$('.clients__list').slick({
		infinite: true,
		arrows: false,
		dots: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		variableWidth: true		
	});

	$(window).resize(function(){	    
	    var $windowWidth = $(window).width();
	    if ($windowWidth <= 1200) {
	        slickfy();
	    }
	});

	slickfy();

	function slickfy() {
		$('.works__list').slick({
			// autoplay: true,
			infinite: true,
			arrows: false,
			dots: true,		
			variableWidth: true,
			responsive: [{
				breakpoint: 99999,
				settings: "unslick"
			}, {
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			}]
		});	
	}

	
	
});
