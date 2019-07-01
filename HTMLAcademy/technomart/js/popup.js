var link = document.querySelector('.search-button');
var popup = document.querySelector('.search-hotels');

var date_arrival = popup.querySelector('[name=date-arrival]');
var date_departure = popup.querySelector('[name=date-departure]');
var form = popup.querySelector('form');


link.addEventListener('click', function(evt) {
	evt.preventDefault();	
	popup.classList.toggle('modal-show');
	if(popup.classList.contains('modal-error')) {
		popup.classList.remove('modal-error');
	}
	date_arrival.focus();
});

// закрытие модального окна при нажатии на Esc
window.addEventListener('keydown', function(evt) {
	if(evt.keyCode === 27) {				
		evt.preventDefault();
		if(popup.classList.contains('modal-show')) {
			popup.classList.remove('modal-show');
			popup.classList.remove('modal-error');
		}
	}
});

form.addEventListener('submit', function(evt) {
	if(!date_arrival.value || !date_departure.value) {
		evt.preventDefault();
		popup.classList.add('modal-error');
	}
});