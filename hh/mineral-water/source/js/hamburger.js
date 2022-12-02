var hamburger = document.querySelector('.page-header__toggle-nav');
var nav_wrapper = document.querySelector('.page-header__nav-wrapper');
var nav = document.querySelector('.page-header__nav');

hamburger.addEventListener('click', function (e) {
	e.preventDefault();

	this.classList.toggle('hamburger__click');
	if(this.classList.contains('hamburger__click')) {
		nav_wrapper.classList.add('page-header__nav-wrapper--show');
	} else {
		nav_wrapper.classList.remove('page-header__nav-wrapper--show');
	}

	if(this.classList.contains('hamburger__click')) {
		nav.classList.add('page-header__nav--show');
	} else {
		nav.classList.remove('page-header__nav--show');
	}
});