var menuItem = document.querySelectorAll('.menu__item');
var dropdown = document.querySelectorAll('.menu__dropdown');

/* действия при изменении ширины экрана */
window.onresize = function(event) {
	var widthBody = document.body.clientWidth;
};

/* работа главного меню */
menuItem.forEach(function(el) { // перебираем массив
	el.addEventListener('click', function (e) {
		// e.preventDefault(); // 
		var parent = this;
		dropdown.forEach(function(el) {
			if(el.parentNode == parent) {
				if(parent.classList.contains('menu__item--active')) {
					hideDropdown();
				} else {
					hideDropdown();
					parent.classList.add('menu__item--active');
					el.style.height = el.scrollHeight + 'px';
					// el.style.height = 'auto';
				}				
			}			
		});	
	});
});

function hideDropdown() { 
	dropdown.forEach(function(el) { //скрыть все подменю
		el.style.height = '0';			
	});
	menuItem.forEach(function(el) { //убрать активный класс
		el.classList.remove('menu__item--active');
	});
}


/* замена произвольного номера в href на нужный для телефона 'tel:+.............' */
var number = document.querySelectorAll('.number-phone');

number.forEach((num) => {	
	href = num.getAttribute('href'); // получаем href
	new_href = href.replace(/[^0-9]/g, ''); // удаляем все, кроме цифр	
	num.setAttribute('href', 'tel:+' + new_href); // меняем значение href
});