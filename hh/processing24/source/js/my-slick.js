jQuery(document).ready(function($) {	
	
	$('.certificates__list').not('.slick-initialized').slick({
		infinite: true,
		arrows: true,
		dots: false,		
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		variableWidth: true,
		appendArrows: $('.certificates__arrows'),
	    
	    prevArrow: '<p class="arrow__prev"></p>',
	    nextArrow: '<p class="arrow__next"></p>'
	});

	$('.partners__list').not('.slick-initialized').slick({
		infinite: true,
		arrows: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		variableWidth: true
	});

	$('.reviews__list').not('.slick-initialized').slick({
		infinite: true,
		arrows: true,
		dots: false,		
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		// rows: 0,
		variableWidth: true,
		
		appendArrows: $('.reviews__arrows'),
	    
	    prevArrow: '<p class="arrow__prev"></p>',
	    nextArrow: '<p class="arrow__next"></p>'
	});
	
});
