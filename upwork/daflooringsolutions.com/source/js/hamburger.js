var hamburger = document.querySelector('.page-header__toggle-nav');
var nav = document.querySelector('.page-header__nav');

hamburger.addEventListener('click', function (e) {
	e.preventDefault();	
	this.classList.toggle('hamburger__click');
	if(this.classList.contains('hamburger__click')) {
		nav.classList.add('page-header__nav--show');
		showHamburger = true;
	} else {
		nav.classList.remove('page-header__nav--show');
		showHamburger = false;
	}	
});

// действие по нажатию на ESC
window.addEventListener('keydown', function (e) {
	if (e.which == 27 && hamburger) { // скрыть меню
		nav.classList.remove('page-header__nav--show');
		hamburger.classList.remove('hamburger__click');
		showHamburger = false;
	}
});