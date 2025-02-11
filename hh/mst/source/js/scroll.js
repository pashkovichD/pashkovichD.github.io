window.addEventListener('load', function(){
	let header = document.querySelector('.page-header');
	// scrollToY(0); // при обновлении страницы scroll в начало страницы (если мы находились на момент обновления где-то ниже)

	// let pos = window.pageYOffset; // количество прокрученных (про'scroll'еных) пикселей
	// if(pos > 100) {
	// 	header.classList.add('page-header__scroll');
	// }
	
	window.addEventListener('scroll', function(e) {	
		onScroll(e);
	});

	function onScroll(e) {		
		let pos = window.pageYOffset; // количество прокрученных (про'scroll'еных) пикселей
		if(pos > 100) {
			header.classList.add('page-header__scroll');
		} else {
			header.classList.remove('page-header__scroll');
		}		
	}	
});

function scrollToY(pos) {
	window.scrollTo({
		top: pos,
		behavior: 'smooth'
	});
}