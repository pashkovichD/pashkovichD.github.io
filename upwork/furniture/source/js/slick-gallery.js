jQuery(document).ready(function($) {
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
				// settings: "unslick",

			}, {
				breakpoint: 1200,
				settings: {
					// slidesToShow: 2,
					// slidesToScroll: 2,
				}
			}, {
				breakpoint: 767,
				settings: {
					rows: 1					
				}
			}]
		});	
	}	
});
