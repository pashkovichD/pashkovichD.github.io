let modalLogin = document.querySelector('.modal-login');
let btnModalLogin = document.querySelector('.page-header__login');
let closeLogin = document.querySelector('.modal-login__close');

let modalSignup = document.querySelector('.modal-signup');
let btnModalSignup = document.querySelector('.page-header__signup');
let closeSignup = document.querySelector('.modal-signup__close');

let overlay = document.querySelector('.overlay');

let removeShowTimeout;

btnModalLogin.addEventListener('click', function(evt) {
	evt.preventDefault();
	workModal(modalLogin, closeLogin, overlay);
});

btnModalSignup.addEventListener('click', function(evt) {
	evt.preventDefault();
	workModal(modalSignup, closeSignup, overlay);
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