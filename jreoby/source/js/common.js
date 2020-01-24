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
		leftHamburger = true; // меню показано
	} else {
		nav.classList.remove('menu-list__show');
		hideDropdown();
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
		// e.preventDefault(); // 
		var parent = this;
		dropdown.forEach(function(el) {
			if(el.parentNode == parent) {
				if(parent.classList.contains('menu-list__item--active')) {
					hideDropdown();
				} else {
					hideDropdown();
					parent.classList.add('menu-list__item--active');
					el.style.height = el.scrollHeight + 'px';
				}				
			}			
		});	
	});
});

function hideDropdown() { 
	dropdown.forEach(function(el) { //скрыть все подменю
		el.style.height = '0';			
	});
	menuItem.forEach(function(el) { //убрать активный класс
		el.classList.remove('menu-list__item--active');
	});

	listSeconddown.style.height = '0'; // скрываем подменю второго уровня

}

/* сделано из расчета одного такого меню, если их будет несколько, то нужно всё делать через querySelectorAll() и перебор массива */
linkSeconddown.addEventListener('click', function (e) {
	e.stopPropagation(); // отменяет событие для родителя	
	
	var parent = this.parentNode.parentNode.style.height; // string
	var heightParent = Number(parent.substr(0, parent.length - 2)); // высота родителя - число
	var heightList = listSeconddown.style.height; // высота подменю - string

	if(heightList.length > 1) {
		heightList = Number(heightList.substr(0, heightList.length - 2)); // отрезаем px и делаем число
	} else {
		heightList = 0;
	}	

	if(heightList > 0) {
		listSeconddown.style.height = '0';
		this.parentNode.parentNode.style.height = heightParent - listSeconddown.scrollHeight + 'px';

	} else {
		listSeconddown.style.height = listSeconddown.scrollHeight + 'px';
		this.parentNode.parentNode.style.height = heightParent + listSeconddown.scrollHeight + 'px';
	}	
});

// действие по нажатию на ESC
window.addEventListener('keydown', function (e) {
	if (e.which == 27) {		
		if(leftHamburger) { // скрыть гланое меню
			hideDropdown();
			hamburger.classList.remove('hamburger__click');
			nav.classList.remove('menu-list__show');
			leftHamburger = false; // меню скрыто
		}
	}
})