window.addEventListener('load', function(){
	let header = document.querySelector('.page-header');

	let animationElements = document.querySelectorAll('.animation-up, .animation-left, .animation-right, .animation-show');
	
	/*let animationUp = document.querySelectorAll('.animation-up');
	let animationLeft = document.querySelectorAll('.animation-left');
	let animationRight = document.querySelectorAll('.animation-right');
	let animationShow = document.querySelectorAll('.animation-show');*/
	
	scrollToY(0); // при обновлении страницы scroll в начало страницы (если мы находились на момент обновления где-то ниже)

	// let pos = window.pageYOffset; // количество прокрученных (про'scroll'еных) пикселей
	// if(pos > 100) {
	// 	header.classList.add('page-header__scroll');
	// }

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
				element.style.transform = "translateY(0)";
			}
		});

		// elementShow(animationUp, windowHeight);

		// animationUp.forEach((up) => {
		// 	let blockPosition = up.getBoundingClientRect().top;
			
		// 	if (blockPosition < windowHeight - 10) {
		// 		up.style.opacity = "1";
		// 		up.style.transform = "translateY(0)";
		// 	}
		// });

		// elementShow(animationLeft, windowHeight);

		// animationLeft.forEach((left) => {
		// 	let blockPosition = left.getBoundingClientRect().top;
			
		// 	if (blockPosition < windowHeight - 10) {
		// 		left.style.opacity = "1";
		// 		left.style.transform = "translateX(0)";
		// 	}
		// });

		// elementShow(animationRight, windowHeight);

		// animationRight.forEach((right) => {
		// 	let blockPosition = right.getBoundingClientRect().top;
			
		// 	if (blockPosition < windowHeight - 10) {
		// 		right.style.opacity = "1";
		// 		right.style.transform = "translateX(0)";
		// 	}
		// });

		// elementShow(animationShow, windowHeight);

		// animationShow.forEach((show) => {
		// 	let blockPosition = show.getBoundingClientRect().top;
			
		// 	if (blockPosition < windowHeight - 10) {
		// 		show.style.opacity = "1";
		// 	}
		// });
	}

	/*function elementShow(elements, windowHeight) {
		elements.forEach((el) => {
			let blockPosition = el.getBoundingClientRect().top;
			
			if (blockPosition < windowHeight - 10) {
				el.style.opacity = "1";
				el.style.transform = "translate(0, 0)";
			}
		});
	}*/

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