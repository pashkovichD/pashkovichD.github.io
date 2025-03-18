let priceItem = document.querySelectorAll('.price__item');

priceItem.forEach((item) => {	
	item.addEventListener('click', function(evt) {		
		priceItem.forEach((item) => {
			item.classList.remove('price__item--active');	
		});
		item.classList.add('price__item--active');
	});	
});


let btnMore = document.querySelectorAll('.more__button');

btnMore.forEach((btn) => {
	btn.addEventListener('click', function(evt) {
		evt.preventDefault();		
		let more = this.nextElementSibling; // скрытый блок
		let hide = more.querySelector('.more__hide'); // снопка "Скрыть"

		more.style.maxHeight = more.scrollHeight + "px"; // свойство height делает равным его фактической высоте
		btn.style.display = 'none';
		hide.addEventListener('click', function() {
			more.style.maxHeight = null; // делаем высоту равной 0
			btn.style.display = 'block';
		});
	});	
});



