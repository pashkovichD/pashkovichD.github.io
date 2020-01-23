var hamburger = document.querySelector('.page-header__toggle-nav');
var search = document.querySelector('.page-header__toggle-search');


var nav = document.querySelector('.main-nav__list');
var menuItem = document.querySelectorAll('.menu-list__item');

/* работа кнопки меню-гамбургера */
hamburger.addEventListener('click', function (e) {
	e.preventDefault();
	this.classList.toggle('hamburger__click');
	if(this.classList.contains('hamburger__click')) {
		nav.classList.add('menu-list__show');
	} else {
		nav.classList.remove('menu-list__show');
	}
});

/* show поиска */
search.addEventListener('click', function (e) {
	e.preventDefault();
	// this.classList.toggle('hamburger__click');
	alert("OK");
});

/* show поиска */
menuItem.forEach(function(el) { // перебираем массив
	el.addEventListener('click', function (e) {
		// e.preventDefault();		
		this.classList.toggle('menu-list__item--active');				
	});
});
