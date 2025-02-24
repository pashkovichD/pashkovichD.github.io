window.addEventListener('load', function(){
	let header = document.querySelector('.page-header');

	let animationUp = document.querySelectorAll('.animation-up');
	let animationLeft = document.querySelectorAll('.animation-left');
	let animationRight = document.querySelectorAll('.animation-right');	
	
	scrollToY(0); // при обновлении страницы scroll в начало страницы (если мы находились на момент обновления где-то ниже)

	// let pos = window.pageYOffset; // количество прокрученных (про'scroll'еных) пикселей
	// if(pos > 100) {
	// 	header.classList.add('page-header__scroll');
	// }
	
	window.addEventListener('scroll', function(e) {	
		onScroll(e);

		let windowHeight = window.innerHeight;

		animationUp.forEach((up) => {
			let blockPosition = up.getBoundingClientRect().top;
			
			if (blockPosition < windowHeight - 100) {
				up.style.opacity = "1";
				up.style.transform = "translateY(0)";
			}
		});

		animationLeft.forEach((left) => {
			let blockPosition = left.getBoundingClientRect().top;
			
			if (blockPosition < windowHeight - 100) {
				left.style.opacity = "1";
				left.style.transform = "translateX(0)";
			}
		});

		animationRight.forEach((right) => {
			let blockPosition = right.getBoundingClientRect().top;
			
			if (blockPosition < windowHeight - 100) {
				right.style.opacity = "1";
				right.style.transform = "translateX(0)";
			}
		});

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