let modalUser = document.querySelector('.modal-user');
let btnModalUser = document.querySelector('.page-header__user');
let closeUser = document.querySelector('.modal-user__close');

let modalVideo = document.querySelector('.modal-video');
let btnModalVideo = document.querySelector('.intro__video');
let closeVideo = document.querySelector('.modal-video__close');

let overlay = document.querySelector('.overlay');

workPopup(modalUser, btnModalUser, closeUser, overlay);
workPopup(modalVideo, btnModalVideo, closeVideo, overlay);

function workPopup(modal, btnModal, close, overlay) {
	/* показ модального окна и overlay */
	btnModal.addEventListener('click', function(evt) {	
		evt.preventDefault();
		modal.classList.remove('modal-hide');
		modal.classList.add('modal-show');
		overlay.classList.add('overlay-show');
	});

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
	modal.classList.remove('modal-show');
	modal.classList.add('modal-hide');	
	overlay.classList.remove('overlay-show');
}