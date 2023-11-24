/* замена произвольного номера в href на нужный для телефона 'tel:+.............' */
var number = document.querySelectorAll('.number-phone');

number.forEach((num) => {	
	href = num.getAttribute('href'); // получаем href
	new_href = href.replace(/[^0-9]/g, ''); // удаляем все, кроме цифр	
	num.setAttribute('href', 'tel:+' + new_href); // меняем значение href
});