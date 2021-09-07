jQuery(document).ready(function($) {
	$(window).resize(function(){	    
	    var $windowWidth = $(window).width();
	    if ($windowWidth <= 991) {
        	teamfy();
	    }
	});

	teamfy();

	function teamfy() {
		$('.tabs__tabs-wrapper').not('.slick-initialized').slick({			
			infinite: true,
			arrows: false,
			dots: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			draggable: true,
			variableWidth: true,
			responsive: [{
				breakpoint: 4000,
				settings: "unslick"
			}, {
				breakpoint: 991,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}]
		});	
	}
	
});
