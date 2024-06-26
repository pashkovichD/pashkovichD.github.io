window.addEventListener('load', function() {
	let radioInputs = document.querySelectorAll('.rates__item input[type="radio"]');	
	let items = document.querySelectorAll('.rates__item');

	let radioInputsOffers = document.querySelectorAll('.modal-offer__item input[type="radio"]');	
	let itemsOffer = document.querySelectorAll('.modal-offer__item');

	radioChecked(radioInputs, items);
	radioChecked(radioInputsOffers, itemsOffer);

	function radioChecked(radioInputs, items) {
		radioInputs.forEach(function(radio) {
			radio.addEventListener('change', function() {
				items.forEach(function(item) {
					item.classList.remove('radio--checked');
				});
				radio.parentNode.classList.add('radio--checked');
			})
		});
	}
});