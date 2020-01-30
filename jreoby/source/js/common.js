var hamburger = document.querySelector('.page-header__toggle-nav');
var searchButton = document.querySelector('.page-header__toggle-search');
var searchForm = document.querySelector('.search');

var nav = document.querySelector('.main-nav__list');
// var menuItem = document.querySelectorAll('.menu-list__item--fiz, .menu-list__item--ur'); // выбор конкретных пуктов (то же работает)
var menuItem = document.querySelectorAll('.menu-list__item');
var dropdown = document.querySelectorAll('.menu-list__dropdown');
var linkSeconddown = document.querySelector('.menu-list__seconddown-link');
var listSeconddown = document.querySelector('.menu-list__seconddown');

var buttonMore = document.querySelectorAll('.more__button'); // в верстке за этой кнопкой ОБЯЗАТЕЛЬНО должен идти элемент, который нужно разворачивать с классом .more


/* действия при изменении ширины экрана */
window.onresize = function(event) {
	var widthBody = document.body.clientWidth;

};


/* работа кнопки меню-гамбургера и появление меню */
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
searchButton.addEventListener('click', function (e) {
	e.preventDefault();
	
	// this.classList.toggle('hamburger__click');
	searchForm.classList.toggle('search__show');
	if(searchForm.classList.contains('search__show')) {		
		searchShow = true; // форма поиска показана
	}
	
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
					// el.style.height = 'auto';
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
	var heightList = listSeconddown.style.height; // высота подменю - string

	if(heightList == 'auto') {
		listSeconddown.style.height = '0';		
		this.parentNode.parentNode.style.height = 'auto';

	} else {
		listSeconddown.style.height = 'auto';
		this.parentNode.parentNode.style.height = 'auto';
	}	
});

// действие по нажатию на ESC
window.addEventListener('keydown', function (e) {
	if (e.which == 27 && leftHamburger) { // скрыть меню
		hideDropdown();
		hamburger.classList.remove('hamburger__click');
		nav.classList.remove('menu-list__show');
		leftHamburger = false; // меню скрыто		
	}

	if (e.which == 27 && searchShow) { // скрыть форму поиска
		searchForm.classList.remove('search__show');
		searchShow = false; // форма поиска скрыта
	}
})


/* раскрытие блока на нажатию на кнопку MORE --- может быть несколько в любом месте сайта, только после кнопки должен идти тот контейнер, 
который нужно раскрывать. Достаточно кнопке присвоить класс .more__button, а контейнеру .more */
buttonMore.forEach(function(el) { // перебираем массив
	el.addEventListener('click', function (e) {
		e.preventDefault();
		this.nextSibling.nextSibling.style.display = 'block';
		this.style.display = 'none';		
	});
});
