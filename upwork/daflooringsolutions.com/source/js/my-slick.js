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

	$('.gallery__list').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		infinite: true,		
		arrows: true,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true
	});
});