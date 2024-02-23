var popup = document.querySelector('.modal-user');
var iconCloseModal = document.querySelector('.modal-user__close');
var overlay = document.querySelector('.overlay');
var link = document.querySelector('.page-header__user');

/* показ модального окна и overlay */
link.addEventListener('click', function(evt) {	
	evt.preventDefault();
	popup.classList.remove('modal-hide');
	popup.classList.add('modal-show');
	overlay.classList.add('overlay-show');
});


iconCloseModal.addEventListener('click', function(evt) {
	evt.preventDefault();
	hideModal();
});

overlay.addEventListener('click', function(evt) {
	evt.preventDefault();
	hideModal();
});

/* скрытие модального окна */
function hideModal() {
	popup.classList.remove('modal-show');
	popup.classList.add('modal-hide');	
	overlay.classList.remove('overlay-show');
}

// open modal windows if click ESC
window.addEventListener('keydown', function(evt) {
	if(evt.keyCode === 27) {				
		evt.preventDefault();		
		hideModal();
	}
});