var link = document.querySelector('.contact-us__button');
// var link = document.querySelector('.user-list__login');
var close = document.querySelector('.close');
var iconClose = document.querySelector('.modal-contact__close');

var popup = document.querySelector('.modal-contact');
// var form = popup.querySelector('form');
// var login = popup.querySelector('[name=login]');
// var password = popup.querySelector('[name=password]');

var overlay = document.querySelector('.overlay');


link.addEventListener('click', function(evt) {
	evt.preventDefault();
	
	popup.classList.remove('modal-hide');
	popup.classList.add('modal-show');
	overlay.classList.add('overlay-show');
	login.focus();
});

close.addEventListener('click', function(evt) {
	evt.preventDefault();
	hide();
});

iconClose.addEventListener('click', function(evt) {
	evt.preventDefault();
	hide();
});

overlay.addEventListener('click', function(evt) {
	evt.preventDefault();
	hide();
});

function hide() {
	popup.classList.remove('modal-error');
	popup.classList.remove('modal-show');
	popup.classList.add('modal-hide');	
	overlay.classList.remove('overlay-show');
}

// закрытие модального окна при нажатии на Esc
window.addEventListener('keydown', function(evt) {
	if(evt.keyCode === 27) {				
		evt.preventDefault();
		hide();
	}
});

form.addEventListener('submit', function(evt) {

	if(!login.value || !password.value) {
		evt.preventDefault();
		// console.log('Нужно ввести логин и пароль!!!');
		

		if(popup.classList.contains('modal-error')) {
			popup.classList.remove('modal-error');
			// popup.classList.add('modal-repeat-error');
		} else {
			popup.classList.add('modal-error');
		}

		/*if(popup.classList.contains('modal-double-error')) {
			popup.classList.add('modal-error');
			popup.classList.remove('modal-double-error');
		} else {

		}*/
		
	}

});


	
		
