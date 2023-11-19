var hamburger = document.querySelector('.page-header__toggle-nav');
var hamburgerList = document.querySelector('.page-header__toggle-list');
var nav = document.querySelector('.page-header__nav');

hamburger.addEventListener('click', function (e) {
	e.preventDefault();

	this.classList.toggle('hamburger__click');
	if(this.classList.contains('hamburger__click')) {
		nav.classList.add('page-header__nav--show');		
	} else {
		nav.classList.remove('page-header__nav--show');
	}	
});

hamburgerList.addEventListener('click', function (e) {
	e.preventDefault();

	this.classList.toggle('hamburger__click');
	// if(this.classList.contains('hamburger__click')) {
	// 	nav.classList.add('page-header__nav--show');		
	// } else {
	// 	nav.classList.remove('page-header__nav--show');
	// }	
});