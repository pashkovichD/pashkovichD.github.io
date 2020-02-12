var titles = document.querySelectorAll('.accordeon__title');
var contents = document.querySelectorAll('.accordeon__content');


titles.forEach(function(el) { // перебираем массив
	el.addEventListener('click', function (e) {		
		var title = this;
		contents.forEach(function(el) {
			if(el.previousElementSibling == title) {
				if(title.classList.contains('accordeon__title--active')) {
					hideDropdown();
				} else {
					hideDropdown();
					title.classList.add('accordeon__title--active');
					el.style.height = el.scrollHeight + 'px';
				}
			}
		});
	});
});

function hideDropdown() { 
	contents.forEach(function(el) { //скрыть все подменю
		el.style.height = '0';			
	});
	titles.forEach(function(el) { //убрать активный класс
		el.classList.remove('accordeon__title--active');
	});
}