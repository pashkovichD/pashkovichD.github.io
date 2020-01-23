var hamburger = document.querySelector('.page-header__toggle-nav');
var search = document.querySelector('.page-header__toggle-search');


var nav = document.querySelector('.main-nav__list');
var menuItem = document.querySelectorAll('.menu-list__item');
var dropdown= document.querySelectorAll('.menu-list__dropdown');


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
		// hideDropdown();
		parent = this;
		
		// parent.classList.toggle('menu-list__item--active');
		// if(parent.classList.contains == 'menu-list__item--active') {
		// 	alert('OK');
		// }
		dropdown.forEach(function(el) {
			if(el.parentNode == parent) {
				if(parent.classList.contains('menu-list__item--active')) {
					hideDropdown();
					el.style.height = 0 + 'px';
					parent.classList.remove('menu-list__item--active');
				} else {
					hideDropdown();
					parent.classList.add('menu-list__item--active');
					el.style.height = el.scrollHeight + 'px';	
				}
				

				/*if(parent.classList.contains == 'menu-list__item--active') {
					el.style.height = 0 + 'px';
					parent.classList.remove('menu-list__item--active');
				} else {
					parent.classList.add('menu-list__item--active');
					el.style.height = el.scrollHeight + 'px';
				}*/
			}			
		});	
	});
});

function hideDropdown() { //скрыть все подменю и убрать активный класс
	dropdown.forEach(function(el) {
		el.style.height = '0';			
	});
	menuItem.forEach(function(el) {		
		el.classList.remove('menu-list__item--active');
	});
}