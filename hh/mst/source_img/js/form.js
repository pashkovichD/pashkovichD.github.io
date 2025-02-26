window.addEventListener('load', function() {
	const ratesForm = document.querySelector('#rates');
	const offerForm = document.querySelector('#offer-form');
	
	ratesForm.addEventListener('submit', function(e) {	
		e.preventDefault();
	});

	offerForm.addEventListener('submit', function(e) {	
		e.preventDefault();
	});
});