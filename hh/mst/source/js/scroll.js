window.addEventListener('load', function(){
	let header = document.querySelector('.page-header');

	let promoImg = document.querySelector('.promo__img');
	
	scrollToY(0); // при обновлении страницы scroll в начало страницы (если мы находились на момент обновления где-то ниже)

	// let pos = window.pageYOffset; // количество прокрученных (про'scroll'еных) пикселей
	// if(pos > 100) {
	// 	header.classList.add('page-header__scroll');
	// }
	
	window.addEventListener('scroll', function(e) {	
		onScroll(e);

		let windowHeight = window.innerHeight;
		let blockPosition = promoImg.getBoundingClientRect().top;

		if (blockPosition < windowHeight - 100) {
			promoImg.style.opacity = "1";
			promoImg.style.transform = "translateX(0)";
			// block.style.transform = "translateY(0)";
		}

	});

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

/*window.addEventListener('load', function(){
	let header = document.querySelector('.page-header');
	scrollToY(0); // при обновлении страницы scroll в начало страницы (если мы находились на момент обновления где-то ниже)

	// let pos = window.pageYOffset; // количество прокрученных (про'scroll'еных) пикселей
	// if(pos > 100) {
	// 	header.classList.add('page-header__scroll');
	// }
	
	window.addEventListener('scroll', function(e) {	
		onScroll(e);
	});

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
}*/