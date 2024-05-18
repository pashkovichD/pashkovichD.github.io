let modalUser = document.querySelector('.modal-user');
let btnModalUser = document.querySelector('.page-header__user');
let closeUser = document.querySelector('.modal-user__close');

let modalVideo = document.querySelector('.modal-video');
let btnModalVideo = document.querySelector('.intro__video');
let closeVideo = document.querySelector('.modal-video__close');

let modalPhone = document.querySelector('.modal-phone');
let btnModalPhone = document.querySelector('.page-footer__request');
let closePhone = document.querySelector('.modal-phone__close');

let overlay = document.querySelector('.overlay');

let removeShowTimeout;

btnModalUser.addEventListener('click', function(evt) {
	evt.preventDefault();
	workModal(modalUser, closeUser, overlay);
});

btnModalVideo.addEventListener('click', function(evt) {
	evt.preventDefault();
	workModal(modalVideo, closeVideo, overlay);
});

btnModalPhone.addEventListener('click', function(evt) {
	evt.preventDefault();
	workModal(modalPhone, closePhone, overlay);
});

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

	if(modal.querySelector('video')) {
		modal.querySelector('video').pause();
	}
	
	modal.classList.add('modal-hide');	
	overlay.classList.remove('overlay-show');
	
	removeShowTimeout = setTimeout(function() {
		modal.classList.remove('modal-show');
	}, 600);
}