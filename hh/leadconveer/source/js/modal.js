let modalOrder = document.querySelector('.modal-order');

let btnModalPromo = document.querySelector('.promo__button');
let btnModalAdvantages = document.querySelector('.advantages__button');
let btnModalFooter = document.querySelector('.page-footer__order');

let closeOrder = document.querySelector('.modal-order__close');
let overlay = document.querySelector('.overlay');
let removeShowTimeout;

modalButtons(btnModalPromo, btnModalAdvantages, btnModalFooter); // функция для добавления события на кнопку

function modalButtons() {
	let buttons = Object.values(arguments); // преобразовываем объект в массив из значение его ключей
	
	buttons.forEach((btn) => {
		btn.addEventListener('click', function(evt) {
			evt.preventDefault();
			workModal(modalOrder, closeOrder, overlay);
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