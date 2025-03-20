// let modalRegistration = document.querySelector('.modal-registration'); // модальное окно

// // кнопки, при нажатии на которые должно появитьс соответствующее модальное окно
// let btnModalRegistration = document.querySelectorAll('.block__button');

// let closeRegistration = document.querySelector('.modal-registration__close');
// let overlay = document.querySelector('.overlay');
// let removeShowTimeout;

// modalButtons(btnModalRegistration); // функция для добавления события на кнопку

// function modalButtons() {
// 	let buttons = Object.values(arguments); // преобразовываем объект в массив из значение его ключей
// 	const arr = Array.from(buttons[0]); // преобразовываем NodeList в array
	
// 	arr.forEach((btn) => {
// 		btn.addEventListener('click', function(evt) {
// 			evt.preventDefault();
// 			workModal(modalRegistration, closeRegistration, overlay);
// 		});	
// 	});
// }

// function workModal(modal, close, overlay) {
// 	/* показ модального окна и overlay */
// 	modal.classList.remove('modal-hide');
// 	modal.classList.add('modal-show');
// 	overlay.classList.add('overlay-show');	

// 	close.addEventListener('click', function(evt) {
// 		evt.preventDefault();
// 		hideModal(modal, overlay);
// 	});

// 	overlay.addEventListener('click', function(evt) {
// 		evt.preventDefault();
// 		hideModal(modal, overlay);
// 	});

// 	// open modal windows if click ESC
// 	window.addEventListener('keydown', function(evt) {
// 		if(evt.keyCode === 27) {
// 			evt.preventDefault();
// 			hideModal(modal, overlay);
// 		}
// 	});
// }

// /* скрытие модального окна */
// function hideModal(modal, overlay) {	
// 	clearTimeout(removeShowTimeout);
	
// 	modal.classList.add('modal-hide');	
// 	overlay.classList.remove('overlay-show');
	
// 	removeShowTimeout = setTimeout(function() {
// 		modal.classList.remove('modal-show');
// 	}, 600);
// }