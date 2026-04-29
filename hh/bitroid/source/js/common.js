/*--- hamburger.js ---*/
let hamburger = document.querySelector('.page-header__toggle-nav');
let nav = document.querySelector('.page-header__nav');

hamburger.addEventListener('click', function (e) {
	e.preventDefault();

	if(this.classList.contains('hamburger__click')) {
		hamburgerHide();
	} else {
		nav.classList.add('page-header__nav--show');
		hamburger.classList.add('hamburger__click');
	}
});

function hamburgerHide() {
	nav.classList.remove('page-header__nav--show');
	hamburger.classList.remove('hamburger__click');
}


let menuItem = document.querySelectorAll('.menu__item > a');
var dropdown = document.querySelectorAll('.menu__dropdown');

/* работа главного меню */
menuItem.forEach(function(el) { // перебираем массив
	el.addEventListener('click', function (e) {
		e.preventDefault();		
		
		// hideDropdown();

		let dropdown = el.nextElementSibling;
		// dropdown.style.height = dropdown.scrollHeight + 'px';
		
		if(dropdown.classList.contains('menu__dropdown-show')) {
			dropdown.classList.remove('menu__dropdown-show');
			hideDropdown();
		} else {
			dropdown.classList.add('menu__dropdown-show');
		}
	});
});

function hideDropdown() { 
	dropdown.forEach(function(el) { //скрыть все подменю
		el.style.height = '0';
		el.classList.remove('menu__dropdown-show');
	});
}




/*--- search.js ---*/
let searchIcon = document.querySelectorAll('.search svg');
let searchInput = document.querySelectorAll('.search input');
searchIcon.forEach(function(el) {
	el.addEventListener('click', function (e) {
		e.preventDefault();
		let searchInput = el.nextElementSibling;		
		if(searchInput.classList.contains('search-show')) {
			searchInput.classList.remove('search-show');
		} else {		
			searchInput.classList.add('search-show');
		}
	});	
});

window.addEventListener('keydown', function(evt) {
	if(evt.keyCode === 27) {
		evt.preventDefault();
		searchInput.forEach(function(el) {
			el.classList.remove('search-show');
		});

		hideDropdown();
	}
});

/*--- modal.js ---*/
let modalProject = document.querySelector('.modal-project'); // модальное окно
// кнопки, при нажатии на которые должно появитьс соответствующее модальное окно
let btnModalProject = document.querySelectorAll('.page-header__fos, .sta__button');
let closeProject = document.querySelector('.modal-project__close');

let modalOrder = document.querySelector('.modal-order'); // модальное окно
let btnModalOrder = document.querySelectorAll('.promo__button');
let closeOrder = document.querySelector('.modal-order__close');

let overlay = document.querySelector('.overlay');
let removeShowTimeout;

modalButtons(btnModalProject, modalProject, closeProject); // функция для добавления события на кнопку
modalButtons(btnModalOrder, modalOrder, closeOrder); // функция для добавления события на кнопку

function modalButtons() {
	let buttons = Object.values(arguments); // преобразовываем объект в массив из значение его ключей
	const arr = Array.from(buttons[0]); // преобразовываем NodeList в array
	arr.forEach((btn) => {
		btn.addEventListener('click', function(evt) {
			evt.preventDefault();
			workModal(buttons[1], buttons[2], overlay);
			// workModal(modalProject, closeProject, overlay);
		});	
	});
}

function workModal(modal, close, overlay) {
	/* показ модального окна и overlay */
	modal.classList.remove('modal-hide');
	modal.classList.add('modal-show');
	overlay.classList.add('overlay-show');	

	close.addEventListener('click', function(evt) {
		evt.preventDefault();
		hideModal(modal, overlay);
	});

	overlay.addEventListener('click', function(evt) {
		evt.preventDefault();
		hideModal(modal, overlay);
	});

	// open modal windows if click ESC
	window.addEventListener('keydown', function(evt) {
		if(evt.keyCode === 27) {
			evt.preventDefault();
			hideModal(modal, overlay);
		}
	});
}

/* скрытие модального окна */
function hideModal(modal, overlay) {	
	clearTimeout(removeShowTimeout);
	
	modal.classList.add('modal-hide');	
	overlay.classList.remove('overlay-show');
	
	removeShowTimeout = setTimeout(function() {
		modal.classList.remove('modal-show');
	}, 600);
}