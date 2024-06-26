let modalOffer = document.querySelector('.modal-offer');
let closeOffer = document.querySelector('.modal-offer__close');
let overlay = document.querySelector('.overlay');

let removeShowTimeout;

// btnModalLogin.addEventListener('click', function(evt) {
// 	evt.preventDefault();
// 	workModal(modalLogin, closeLogin, overlay);
// });

workModal(modalOffer, closeOffer, overlay);

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