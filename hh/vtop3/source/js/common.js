/* смена языка */
window.addEventListener('load', function() {
	let lang = document.querySelector('.page-header__lang');	
	let langText = lang.querySelector('span');
	let clicked = false;
	lang.addEventListener('click', function() {
		if(!clicked) {
			clicked = true;
			langText.innerHTML = (langText.innerHTML === 'EN') ? 'RU' : 'EN';
			langText.classList.add('lang__show');
			setTimeout(removeClass, 2000);
		}		
	});

	function removeClass() {
		langText.classList.remove('lang__show');
		clicked = false;
	}	
});