var hamburgerFirst = document.querySelector('.page-header__toggle-nav-first');
var hamburgerSecond = document.querySelector('.page-header__toggle-nav-second');
var mainNav = document.querySelector('.main-nav');
var secondNav = document.querySelector('.second-nav');

hamburgerFirst.addEventListener('click', function (e) {
	e.preventDefault();

	this.classList.toggle('hamburger__click');
	if(this.classList.contains('hamburger__click')) {
		mainNav.classList.add('main-nav--show');
		// leftHamburger = true; // menu show
	} else {
		mainNav.classList.remove('main-nav--show');
		// hideDropdown();
	}	
});

hamburgerSecond.addEventListener('click', function (e) {
	e.preventDefault();

	this.classList.toggle('hamburger__click');
	if(this.classList.contains('hamburger__click')) {
		secondNav.classList.add('main-nav--show');
		// leftHamburger = true; // menu show
	} else {
		secondNav.classList.remove('main-nav--show');		
	}	
});