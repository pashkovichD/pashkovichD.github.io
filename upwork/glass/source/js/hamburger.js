var hamburgerFirst = document.querySelector('.page-header__toggle-nav');
var mainNav = document.querySelector('.main-nav');

hamburgerFirst.addEventListener('click', function (e) {
	e.preventDefault();

	this.classList.toggle('hamburger__click');
	if(this.classList.contains('hamburger__click')) {
		mainNav.classList.add('main-nav--show');		
	} else {
		mainNav.classList.remove('main-nav--show');
	}	
});