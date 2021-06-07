$(document).ready(function() {
	$('.header__toolbar-search-toggle').on('click', function() {
		if($('.header-page').hasClass("header-page--light")) {
			$('.header-page').addClass('header-page--dark');
			$('.header-page').removeClass('header-page--light');
		} else {
			$('.header-page').addClass('header-page--light');
			$('.header-page').removeClass('header-page--dark');
		}
	});


	// $('.page-header__toggle-nav').on('click', function() {
	// 	if($('.header-page').hasClass("page-header__toggle-nav")) {
	// 		$('.header-page').addClass('header-page--dark');
	// 		$('.header-page').removeClass('header-page--light');
	// 	} else {
	// 		$('.header-page').addClass('header-page--light');
	// 		$('.header-page').removeClass('header-page--dark');
	// 	}
	// });
});