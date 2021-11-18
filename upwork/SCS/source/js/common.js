jQuery(document).ready(function($) {	
	// $('.page-header__nav .menu__item').on('click', function(e) {
	// 	$('.page-header__nav').removeClass('page-header__nav--show');
	// 	$('.page-header__toggle-nav').removeClass('hamburger__click');
	// 	showHamburger = false;
	// });

	// плавный scroll до нужной секции (#)
	// $(".menu__item a").on("click", function(e){		
	// 	e.preventDefault();
	// 	var anchor = $(this).attr('href');
	// 	// alert(anchor);
	// 	$('html, body').stop().animate({
	// 	    scrollTop: $(anchor).offset().top - 0
	// 	}, 800);
	// });

	// var h = $('.page-header').height();
	// $('.page-main').css('paddingTop', h + 'px');

	/*$('.articles__youtube-video video').on('click', function(e) {
		// alert();
		// $('.video7')[0].play();
		this.paused ? this.play() : this.pause();
	});*/

	// var video = $('.articles__youtube-video video');
	// var video = $('.articles__youtube-video video, .recent-articles__youtube-video video');
	
	// $('.articles__youtube-video video').on('click', function(e) {		
	// 	this.paused ? this.play() : this.pause();
	// });

	// document.onkeypress = function(e){
	//     if((e || window.event).keyCode === 32){
	//         video.paused ? video.play() : video.pause();
	//     }
	// };

	/*const selectSingle = document.querySelector('.__select');
	const selectSingle_title = selectSingle.querySelector('.__select__title');
	const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

	// Toggle menu
	selectSingle_title.addEventListener('click', () => {
	  if ('active' === selectSingle.getAttribute('data-state')) {
	    selectSingle.setAttribute('data-state', '');
	  } else {
	    selectSingle.setAttribute('data-state', 'active');
	  }
	});

	// Close when click to option
	for (let i = 0; i < selectSingle_labels.length; i++) {
	  selectSingle_labels[i].addEventListener('click', (evt) => {
	    selectSingle_title.textContent = evt.target.textContent;
	    selectSingle.setAttribute('data-state', '');
	  });
	}

	// Reset title
	const reset = document.querySelector('.reset');
	reset.addEventListener('click', () => {
	  selectSingle_title.textContent = selectSingle_title.getAttribute('data-default');
	});*/

});