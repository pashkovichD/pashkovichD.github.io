jQuery(document).ready(function($) {	
	/*$('.page-header__nav .menu__item').on('click', function(e) {
		$('.page-header__nav').removeClass('page-header__nav--show');
		$('.page-header__toggle-nav').removeClass('hamburger__click');
		showHamburger = false;
	});*/

	// плавный scroll до нужной секции (#)
	$(".menu__item a").on("click", function(e){		
		e.preventDefault();
		var anchor = $(this).attr('href');
		// alert(anchor);
		$('html, body').stop().animate({
		    scrollTop: $(anchor).offset().top - 300
		}, 800);
	});

	

	// var h = $('.page-header').css('height');
	// var h = $('.page-header').outerHeight();
	
	// var h = $('.page-header').innerHeight();
	// alert(h);
	
	/*var h = $('.page-header').height();
	$('.page-main').css('paddingTop', h + 'px');*/
});