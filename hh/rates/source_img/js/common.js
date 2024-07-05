window.addEventListener('load', function() {
	let ratesList = document.querySelector('.rates__list');
	// let radioInputs = document.querySelectorAll('.rates__item input[type="radio"]');
	// let items = document.querySelectorAll('.rates__item');

	// let radioInputsOffers = document.querySelectorAll('.modal-offer__item input[type="radio"]');	
	// let itemsOffer = document.querySelectorAll('.modal-offer__item');
		
	// console.log(items);	

	radioChecked(ratesList);
	// radioChecked(radioInputs, items);
	// radioChecked(radioInputsOffers, itemsOffer);

	function radioChecked(radioInputs, items) {
		// console.log(ratesList);
		// ratesList.addEventListener('click', function(e) {
		ratesList.addEventListener('change', function(e) {
			let item = e.target.parentNode;

			if(item.classList.contains('radio--checked')) {
				item.classList.remove('radio--checked');
			}
			// items.forEach(function(item) {
			// 	item.classList.remove('radio--checked');
			// });
			item.classList.add('radio--checked');
		})

		// radioInputs.forEach(function(radio) {
		// 	radio.addEventListener('change', function() {
		// 		items.forEach(function(item) {
		// 			item.classList.remove('radio--checked');
		// 		});
		// 		radio.parentNode.classList.add('radio--checked');
		// 	})
		// });
	}

	/*function radioChecked(radioInputs, items) {
		radioInputs.forEach(function(radio) {
			radio.addEventListener('change', function() {
				items.forEach(function(item) {
					item.classList.remove('radio--checked');
				});
				radio.parentNode.classList.add('radio--checked');
			})
		});
	}*/
});