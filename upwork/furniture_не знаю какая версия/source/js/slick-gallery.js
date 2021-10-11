jQuery(document).ready(function($) {
	$(window).resize(function(){	    
	    var $windowWidth = $(window).width();
	    if ($windowWidth <= 767) {
	        slickfy_gallery();
	    }
	});

	slickfy_gallery();

	function slickfy_gallery() {		
		$('.gallery__list').not('.slick-initialized').slick({
			infinite: true,
			arrows: false,
			dots: true,		
			variableWidth: true,			
			rows: 2,
			slidesToShow: 2,
			slidesToScroll: 2,
			responsive: [{
				breakpoint: 99999,
				rows: 2

			}, {
				breakpoint: 1200,
				settings: {					
					rows: 2
				}
			}, {
				breakpoint: 767,
				settings: {
					settings: "slick",
					rows: 1					
				}
			}]
		});	
	}	
});
