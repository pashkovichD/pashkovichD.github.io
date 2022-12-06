jQuery(document).ready(function($) {
	
	$('.slider__list').not('.slick-initialized').slick({
		infinite: true,
		dots: true,
		arrows: false,
		autoplay: false,
		speed: 800,
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


	/*-------------------------------------------------------*/
	var percent;
	var int;
	var time = 1;
	var index_bar = 0;	

	$('.slider__preloader .progressBar').each(function(index) {        
		var progress = "<div class='inProgress inProgress" + index + "'></div>";
		$(this).html(progress);
	});

	function startProgressbar() { // запуск отрисовки прогрессбара
		resetProgressbar(); // сброс всех прогрессбаров (в 0)
		percent = 0;
		int = setInterval(interval, 10); // отрисовка прогрессбара (многократное повторение функции interval с задержкой 10)
	}

	function interval() {
		if (($('.slider__list .slick-track div[data-slick-index="' + index_bar + '"]').attr("aria-hidden")) === "true") {
			index_bar = $('.slider__list .slick-track div[aria-hidden="false"]').data("slickIndex");
			startProgressbar();
		} else {
			percent += 1 / (time + 5);
			$('.inProgress' + index_bar).css({
				width: percent + "%"
			});
			if (percent >= 100) { 
				$('.slider__list').slick('slickNext');				
				index_bar++;
				if (index_bar > 2) {
					index_bar = 0;
				}
				startProgressbar();
			}
		}
	}

	
	function resetProgressbar() { // сброс прогресса не всех прогрессбарах
		$('.inProgress').css({ // все div'ы с классом .inProgress получают ширину 0
			width: 0 + '%'
		});
		clearInterval(int); // сброс интервала int
	}

	startProgressbar(); // запуск прогрессбара на первом слайде

	/*-------------------------------------------------------*/

	
	
});


// https://tympanus.net/Development/CreativeLoadingEffects/

jQuery(document).ready(function($) {
	$('.about__list').not('.slick-initialized').slick({
		infinite: false,
		dots: false,
		arrows: true,
		autoplay: false,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		variableWidth: true,
		centerMode: true,
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

	/*-------------------------------------------------------*/
	var about_percent;
	var about_int;
	var about_time = 1;
	var about_index_bar = 0;

	$('.about__preloader .progressBar').each(function(index) {        
		var about_progress = "<div class='inProgress inProgress" + index + "'></div>";
		$(this).html(about_progress);
	});

	function startProgressbar() { // запуск отрисовки прогрессбара
		resetProgressbar(); // сброс всех прогрессбаров (в 0)
		about_percent = 0;
		about_int = setInterval(about_interval, 10); // отрисовка прогрессбара (многократное повторение функции interval с задержкой 10)
	}

	function about_interval() {
		if (($('.about__list .slick-track div[data-slick-index="' + about_index_bar + '"]').attr("aria-hidden")) === "true") {
			about_index_bar = $('.about__list .slick-track div[aria-hidden="false"]').data("slickIndex");
			startProgressbar();
		} else {
			about_percent += 1 / (about_time + 5);
			$('.inProgress' + about_index_bar).css({
				width: about_percent + "%"
			});
			if (about_percent >= 100) { 
				$('.about__list').slick('slickNext');				
				about_index_bar++;
				if (about_index_bar > 2) {
					about_index_bar = 0;
				}
				startProgressbar();
			}
		}
	}

	
	function resetProgressbar() { // сброс прогресса не всех прогрессбарах
		$('.inProgress').css({ // все div'ы с классом .inProgress получают ширину 0
			width: 0 + '%'
		});
		clearInterval(int); // сброс интервала int
	}

	startProgressbar(); // запуск прогрессбара на первом слайде

	/*-------------------------------------------------------*/

});
