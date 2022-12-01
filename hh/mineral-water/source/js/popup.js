var link = document.querySelector('.page-header__connect');
var linkUser = document.querySelector('.page-header__user');
var close = document.querySelector('.close');
var iconClose = document.querySelector('.modal-contact__close');
var iconCloseUser = document.querySelector('.modal-user__close');
var popup = document.querySelector('.modal-contact');
var popupUser = document.querySelector('.modal-user');
var overlay = document.querySelector('.overlay');

link.addEventListener('click', function(evt) {
	evt.preventDefault();	
	popup.classList.remove('modal-hide');
	popup.classList.add('modal-show');
	overlay.classList.add('overlay-show');
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
	popup.classList.remove('modal-show');
	popup.classList.add('modal-hide');	
	overlay.classList.remove('overlay-show');
}

linkUser.addEventListener('click', function(evt) {
	evt.preventDefault();		
	popupUser.classList.remove('modal-hide');
	popupUser.classList.add('modal-show');
	overlay.classList.add('overlay-show');
});

close.addEventListener('click', function(evt) {
	evt.preventDefault();
	hideUser();
});

iconCloseUser.addEventListener('click', function(evt) {
	evt.preventDefault();
	hideUser();
});

overlay.addEventListener('click', function(evt) {
	evt.preventDefault();
	hideUser();
});

function hideUser() {
	popupUser.classList.remove('modal-show');
	popupUser.classList.add('modal-hide');	
	overlay.classList.remove('overlay-show');
}

// open modal windows if click ESC
window.addEventListener('keydown', function(evt) {
	if(evt.keyCode === 27) {				
		evt.preventDefault();
		hide();
		hideUser();
	}
});