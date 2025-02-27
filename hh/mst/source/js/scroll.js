window.addEventListener('load', function(){
	let header = document.querySelector('.page-header');
	let animationElements = document.querySelectorAll('.animation-up, .animation-left, .animation-right, .animation-show');
	
	scrollToY(0); // при обновлении страницы scroll в начало страницы (если мы находились на момент обновления где-то ниже)

	animationAction();
	
	window.addEventListener('scroll', function(e) {	
		onScroll(e);
		animationAction();
	});

	function animationAction() {

		let windowHeight = window.innerHeight;

		animationElements.forEach((element) => {
			let blockPosition = element.getBoundingClientRect().top;
			
			if (blockPosition < windowHeight - 10) {
				element.style.opacity = "1";
				element.style.transform = "translate(0, 0)";
			}
		});		
	}	

	function onScroll(e) {		
		let pos = window.pageYOffset; // количество прокрученных (про'scroll'еных) пикселей
		if(pos > 72) {
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