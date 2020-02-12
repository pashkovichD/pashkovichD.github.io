// var titles = document.querySelectorAll('.accordeon__title');
// var contents = document.querySelectorAll('.accordeon__content');


// titles.forEach(function(el) { // перебираем массив
// 	el.addEventListener('click', function (e) {		
// 		var title = this;
// 		contents.forEach(function(el) {
// 			if(el.previousElementSibling == title) {
// 				if(title.classList.contains('accordeon__title--active')) {
// 					hideDropdown();
// 				} else {
// 					hideDropdown();
// 					title.classList.add('accordeon__title--active');
// 					el.style.height = el.scrollHeight + 'px';
// 				}
// 			}
// 		});
// 	});
// });

// function hideDropdown() { 
// 	contents.forEach(function(el) { //скрыть все подменю
// 		el.style.height = '0';			
// 	});
// 	titles.forEach(function(el) { //убрать активный класс
// 		el.classList.remove('accordeon__title--active');
// 	});
// }

// $('.question input:not([type=submit]), .question textarea').focus(function() {
// 	if($(this).val() == '') {
// 		$(this).next('label').animate({top: '9px', fontSize: '15px'}, 300, 'easeOutQuint').css({color: '#319A00'});
// 		$(this).css({borderColor: '#319A00'});
// 	}
// });

// $('.question input:not([type=submit]), .question textarea').blur(function() {
// 	if($(this).val() == '') {
// 		if(this.nodeName == 'TEXTAREA') {
// 			$(this).next('label').animate({top: '30px', fontSize: '16px'}, 300, 'easeOutQuint').css({color: '#c3c3c3'});
// 			$(this).css({borderColor: '#d0d0d0'});
// 		} else {
// 			$(this).next('label').animate({top: '50%', fontSize: '16px'}, 300, 'easeOutQuint').css({color: '#c3c3c3'});
// 			$(this).css({borderColor: '#d0d0d0'});
// 		}
// 	} else {
// 		$(this).next('label').css({color: '#e0e0e0'});
// 		$(this).css({borderColor: '#e0e0e0'});
// 	}
// });

// var inputs = document.querySelectorAll('.form__input');
var inputs = document.querySelectorAll('.form__input');

inputs.forEach(function(el) {
	el.addEventListener('click', function (e) {
		if(this.value == '') {
			// alert('OK');
		}
	});
	
	// el.addEventListener('focus', function (e) {
	// 	// e.classList.add('red');

	// });
});


// inputs.addEventListener('focus', function (e) {
// 	// e.classList.add('red');
// });