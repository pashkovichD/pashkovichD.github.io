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
			slidesToShow: 2,
			slidesToScroll: 2,
			draggable: true,
			rows: 0,
			variableWidth: true,
			responsive: [{
				breakpoint: 4000,
				settings: "unslick"
			}, {
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}]
		});
	}
	
});
