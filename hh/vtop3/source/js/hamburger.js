var hamburger = document.querySelector('.page-header__toggle-nav');
// var hamburgerList = document.querySelector('.page-header__toggle-list');
var data = document.querySelector('.page-header__data-container');

hamburger.addEventListener('click', function (e) {
	e.preventDefault();
	
	this.classList.toggle('hamburger__click');
	if(this.classList.contains('hamburger__click')) {
		data.classList.add('page-header__data-container--show');
	} else {
		data.classList.remove('page-header__data-container--show');
	}	
});

/*hamburgerList.addEventListener('click', function (e) {
	e.preventDefault();

	this.classList.toggle('hamburger__click');
	// if(this.classList.contains('hamburger__click')) {
	// 	nav.classList.add('page-header__nav--show');		
	// } else {
	// 	nav.classList.remove('page-header__nav--show');
	// }	
});*/