var hamburger = document.querySelector('.page-header__toggle-nav');
var search = document.querySelector('.page-header__toggle-search');


var nav = document.querySelector('.main-nav__list');
// var menuItem = document.querySelectorAll('.menu-list__item--fiz, .menu-list__item--ur'); // выбор конкретных пуктов (то же работает)
var menuItem = document.querySelectorAll('.menu-list__item');
var dropdown = document.querySelectorAll('.menu-list__dropdown');
var linkSeconddown = document.querySelector('.menu-list__seconddown-link');
var listSeconddown = document.querySelector('.menu-list__seconddown');


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

/* робота главного меню */
menuItem.forEach(function(el) { // перебираем массив
	el.addEventListener('click', function (e) {
		// e.preventDefault();
		parent = this;
		dropdown.forEach(function(el) {
			if(el.parentNode == parent) {
				if(parent.classList.contains('menu-list__item--active')) {
					hideDropdown();
				} else {
					hideDropdown();
					parent.classList.add('menu-list__item--active');
					// el.style.height = 'auto';
					el.style.height = el.scrollHeight + 'px';
				}				
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

linkSeconddown.addEventListener('click', function (e) {
	e.stopPropagation(); // отменяет событие для родителя	
	ul = this.parentNode.parentNode.style.height;

	if(listSeconddown.style.height > 0) {
		listSeconddown.style.height = '0';
	} else {
		listSeconddown.style.height = listSeconddown.scrollHeight + 'px';		
		this.parentNode.parentNode.style.height = listSeconddown.style.height + ul;
		
	}
});