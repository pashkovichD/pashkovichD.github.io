let priceItem = document.querySelectorAll('.price__item');

priceItem.forEach((item) => {	
	item.addEventListener('click', function(evt) {		
		priceItem.forEach((item) => {
			item.classList.remove('price__item--active');	
		});
		item.classList.add('price__item--active');
	});	
});