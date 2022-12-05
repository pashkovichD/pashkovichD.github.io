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

	// Смена цифры в слайдере
	$(".slider__list").on("afterChange", function(event, slick, currentSlide, nextSlide) {
		$(".slider__number .current").text(currentSlide + 1);		
	});



	
	
});


// https://tympanus.net/Development/CreativeLoadingEffects/

jQuery(document).ready(function($) {
	$('.about__list').not('.slick-initialized').slick({
		// infinite: false,		
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		variableWidth: true,
		// centerMode: true,
		// adaptiveHeight: true
		swipe: true,
		appendArrows: $('.about__arrows'),
	    prevArrow: '<button type="button" class="about__prev arrow__prev" tabindex="0" aria-label="Предыдущий"><svg width="19" height="16" fill="#1946ba"><use xlink:href="#icon-arrow"></use></svg><span class="visually-hidden">Предыдущий</span></button>',
	    nextArrow: '<button type="button" class="about__next arrow__next" tabindex="0" aria-label="Следующий"><svg width="19" height="16" fill="#1946ba"><use xlink:href="#icon-arrow"></use></svg><span class="visually-hidden">Следующий</span></button>'
	});

	// текущий слайд
	let currentSlide = $('.about__list').slick('slickCurrentSlide') + 1;
	$('.about__number .current').text(currentSlide);

	// количество слайдов
	let total = $(".about__list").slick("getSlick").slideCount;
	$('.about__number .total').text(total);

	// Смена цифры в слайдере 
	$(".about__list").on("afterChange", function(event, slick, currentSlide, nextSlide){
		$(".about__number .current").text(currentSlide + 1);		
	});
});
