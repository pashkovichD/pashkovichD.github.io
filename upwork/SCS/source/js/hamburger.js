var hamburger = document.querySelector('.page-header__toggle-nav');
var box = document.querySelector('.page-header__box');

hamburger.addEventListener('click', function (e) {
	e.preventDefault();	
	this.classList.toggle('hamburger__click');
	if(this.classList.contains('hamburger__click')) {
		box.classList.add('page-header__box--show');
		showHamburger = true;
	} else {
		box.classList.remove('page-header__box--show');
		showHamburger = false;
	}	
});

// действие по нажатию на ESC
window.addEventListener('keydown', function (e) {
	if (e.which == 27 && hamburger) { // скрыть меню
		box.classList.remove('page-header__box--show');
		hamburger.classList.remove('hamburger__click');
		showHamburger = false;
	}
});