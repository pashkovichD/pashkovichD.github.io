jQuery(document).ready(function($) {	
	
	$('.slider__list').not('.slick-initialized').slick({
		// infinite: true,
		dots: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		variableWidth: true,
		centerMode: true,
		// adaptiveHeight: true
		swipe: true
		// appendArrows: $('.certificates__arrows'),	    
	    // prevArrow: '<p class="arrow__prev"></p>',
	    // nextArrow: '<p class="arrow__next"></p>'
	});

	// текущий слайд
	let currentSlide = $('.slider__list').slick('slickCurrentSlide') + 1;
	$('.slider__number .current').text(currentSlide);

	// количество слайдов
	let total = $(".slider__list").slick("getSlick").slideCount;
	$('.slider__number .total').text(total);

	/*Смена цифры в слайдере*/
	$(".slider__list").on("afterChange", function(event, slick, currentSlide, nextSlide){
		$(".slider__number .current").text(currentSlide + 1);		
	});



	$('.about__list').not('.slick-initialized').slick({
		// infinite: false,		
		dots: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		variableWidth: true,
		centerMode: true,
		// adaptiveHeight: true
		swipe: true
		// appendArrows: $('.certificates__arrows'),	    
	    // prevArrow: '<p class="arrow__prev"></p>',
	    // nextArrow: '<p class="arrow__next"></p>'
	});

	// текущий слайд
	// let currentSlide = $('.about__list').slick('slickCurrentSlide') + 1;
	// $('.about__number .current').text(currentSlide);

	// количество слайдов
	// let total = $(".slider__list").slick("getSlick").slideCount;
	// $('.about__number .total').text(total);

	/*Смена цифры в слайдере*/
	// $(".about__list").on("afterChange", function(event, slick, currentSlide, nextSlide){
	// 	$(".about__number .current").text(currentSlide + 1);		
	// });

	/*$('.partners__list').not('.slick-initialized').slick({
		infinite: true,
		arrows: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		variableWidth: true
	});*/

	/*$('.reviews__list').not('.slick-initialized').slick({
		infinite: true,
		arrows: true,
		dots: false,		
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		variableWidth: true,		
		appendArrows: $('.reviews__arrows'),
	    prevArrow: '<p class="arrow__prev"></p>',
	    nextArrow: '<p class="arrow__next"></p>'
	});*/
	
});
