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
		swipe: true		
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
				// index_bar++;
				// if (index_bar > 3) {
				// 	index_bar = 0;
				// }
				
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

jQuery(document).ready(function($) {
	$('.about__list').not('.slick-initialized').slick({
		infinite: true,
		dots: false,
		arrows: true,
		autoplay: false,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		variableWidth: true,
		centerMode: true,		
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
	var ab_percent;
	var ab_int;
	var ab_time = 1;
	var ab_index_bar = 0;

	$('.about__preloader .ab_progressBar').each(function(index) {        
		var ab_progress = "<div class='ab_inProgress ab_inProgress" + index + "'></div>";
		$(this).html(ab_progress);
	});

	function ab_startProgressbar() {
		ab_resetProgressbar();
		ab_percent = 0;
		ab_int = setInterval(ab_interval, 10);
	}

	function ab_interval() {
		if (($('.about__list .slick-track div[data-slick-index="' + ab_index_bar + '"]').attr("aria-hidden")) === "true") {
			ab_index_bar = $('.about__list .slick-track div[aria-hidden="false"]').data("slickIndex");
			ab_startProgressbar();
		} else {
			ab_percent += 1 / (ab_time + 5);
			$('.ab_inProgress' + ab_index_bar).css({
				width: ab_percent + "%"
			});
			if (ab_percent >= 100) { 
				$('.about__list').slick('slickNext');
				// ab_index_bar++;
				// if (ab_index_bar > 3) {
				// 	ab_index_bar = 0;
				// }
				ab_startProgressbar();
			}
		}
	}

	
	function ab_resetProgressbar() {
		$('.ab_inProgress').css({
			width: 0 + '%'
		});
		clearInterval(ab_int);
	}

	ab_startProgressbar();
	/*-------------------------------------------------------*/

});
