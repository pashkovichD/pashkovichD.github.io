jQuery(document).ready(function($) {	
	$('.banner__list').slick({
		autoplay: true,
		infinite: true,
		arrows: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true
	});

	/*$(window).resize(function(){	    
	    var $windowWidth = $(window).width();
	    if ($windowWidth <= 600) {
        	consortiumfy();
	    }
	});

	consortiumfy();

	function consortiumfy() {
		$('.consortium__list').not('.slick-initialized').slick({			
			infinite: true,
			arrows: false,
			dots: true,
			slidesToShow: 2,
			slidesToScroll: 2,
			draggable: true,
			rows: 0,
			variableWidth: true,
			responsive: [{
				breakpoint: 4000,
				settings: "unslick"
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}]
		});
	}*/

	/*$(window).resize(function(){	    
	    var $windowWidth = $(window).width();
	    if ($windowWidth <= 1200) {
	        slickfy();
	    }
	});

	slickfy();

	function slickfy() {
		$('.works__list').not('.slick-initialized').slick({			
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
	}	*/

	/*$('.company__list--first').slick({
		infinite: true,
		arrows: false,
		dots: false,
		slidesToShow: 2,
		slidesToScroll: 2,
		variableWidth: true,
		asNavFor: '.company__list--second'
	});
	$('.company__list--second').slick({
		infinite: true,
		arrows: false,
		dots: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		variableWidth: true,
		asNavFor: '.company__list--first'
	});*/


	/*$('.post__list--related').slick({
		infinite: true,
		arrows: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		variableWidth: true
	});	*/
});
