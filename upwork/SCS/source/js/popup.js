var link = document.querySelector('.contact-us__button');
var close = document.querySelector('.close');
var iconClose = document.querySelector('.modal-contact__close');
var popup = document.querySelector('.modal-contact');
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
	popup.classList.remove('modal-error');
	popup.classList.remove('modal-show');
	popup.classList.add('modal-hide');	
	overlay.classList.remove('overlay-show');
}

// open modal windows if click ESC
window.addEventListener('keydown', function(evt) {
	if(evt.keyCode === 27) {				
		evt.preventDefault();
		hide();
	}
});