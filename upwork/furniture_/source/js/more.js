$(function () {
	var $windowWidth = $(window).width();
	if($windowWidth <= 767) {
		el = 3;
	} else if($windowWidth <= 1200) {	
		el = 4;
	} else {
		el = 6;
	}

	$(".more__item").slice(0, el).show().addClass('more__item--show'); // select the first elements
	$("body").on('click touchstart', '.more__button', function (e) {
		e.preventDefault();
		$(".more__item:hidden").slice(0, 3).slideDown().addClass('more__item--show'); // showing the next 3 items
		if ($(".more__item:hidden").length == 0) { 
			$(".more__button").css('display', 'none'); // if there are no elements, then hide the button
		}
		// $('html, body').animate({
		// 	scrollTop: $(this).offset().top
		// }, 1000);		
	});
});
