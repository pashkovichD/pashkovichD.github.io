/*--- hamburger.js ---*/
let hamburger = document.querySelector('.page-header__toggle-nav');
let nav = document.querySelector('.page-header__nav');

hamburger.addEventListener('click', function (e) {
	e.preventDefault();

	if(this.classList.contains('hamburger__click')) {
		hamburgerHide();
	} else {
		nav.classList.add('page-header__nav--show');
		hamburger.classList.add('hamburger__click');
	}
});

function hamburgerHide() {
	nav.classList.remove('page-header__nav--show');
	hamburger.classList.remove('hamburger__click');
}


let menuItem = document.querySelectorAll('.menu__item > a');
var dropdown = document.querySelectorAll('.menu__dropdown');

/* работа главного меню */
menuItem.forEach(function(el) { // перебираем массив
	el.addEventListener('click', function (e) {
		e.preventDefault();		
		
		hideDropdown();

		let dropdown = el.nextElementSibling;
		dropdown.style.height = dropdown.scrollHeight + 'px';
		
		if(dropdown.classList.contains('menu__dropdown-show')) {
			dropdown.classList.remove('menu__dropdown-show');
		} else {
			dropdown.classList.add('menu__dropdown-show');
		}
	});
});

function hideDropdown() { 
	dropdown.forEach(function(el) { //скрыть все подменю
		el.style.height = '0';
		el.classList.remove('menu__dropdown-show');
	});
}




/*--- search.js ---*/
let searchIcon = document.querySelectorAll('.search svg');
let searchInput = document.querySelectorAll('.search input');
searchIcon.forEach(function(el) {
	el.addEventListener('click', function (e) {
		e.preventDefault();
		let searchInput = el.nextElementSibling;		
		if(searchInput.classList.contains('search-show')) {
			searchInput.classList.remove('search-show');
		} else {		
			searchInput.classList.add('search-show');
		}
	});	
});

window.addEventListener('keydown', function(evt) {
	if(evt.keyCode === 27) {
		evt.preventDefault();
		searchInput.forEach(function(el) {
			el.classList.remove('search-show');
		});

		hideDropdown();
	}
});

/*--- scroll.js ---*/
// window.addEventListener('load', function(){
// 	let links = this.document.querySelectorAll('.menu__list .menu__item a, .promo__button, .info__button');	
	
// 	if(window.location.hash != '') {
// 		scrollToId(window.location.hash);
// 	}	

// 	scrollToY(0); // при обновлении страницы scroll в начало страницы (если мы находились на момент обновления где-то ниже)
	
// 	links.forEach((link) => {
// 		link.addEventListener('click', function(e){
// 			e.preventDefault();
// 			// console.log(link.hash);
// 			scrollToId(link.hash);
// 		});
// 	});

// 	function scrollToId(id) {		
// 		let target = document.querySelector(id);		
// 		let styles = window.getComputedStyle(target); // стили целевого блока
// 		let marginTopTarget = parseFloat(styles.marginTop); // верхний отступ целевого блока
// 		if(marginTopTarget == 0) {
// 			marginTopTarget = 30;
// 		}

// 		if(target !== null) {
// 			let pos = elemOffsetTop(target) - marginTopTarget;
// 			scrollToY(pos);
// 		}
// 	}
// });


// function scrollToY(pos) {
// 	window.scrollTo({
// 		top: pos,
// 		behavior: 'smooth'
// 	});
// 	hamburgerHide();
// }

// function elemOffsetTop(node) {
// 	let coords = node.getBoundingClientRect();
// 	return window.pageYOffset + coords.top;
// }


/*--- prices ---*/
let priceItem = document.querySelectorAll('.price__item');

priceItem.forEach((item) => {	
	item.addEventListener('click', function(evt) {		
		priceItem.forEach((item) => {
			item.classList.remove('price__item--active');	
		});
		item.classList.add('price__item--active');
	});	
});


/*--- buttom More ---*/
let btnMore = document.querySelectorAll('.more__button');

btnMore.forEach((btn) => {
	btn.addEventListener('click', function(evt) {
		evt.preventDefault();		
		let more = this.nextElementSibling; // скрытый блок
		let hide = more.querySelector('.more__hide'); // снопка "Скрыть"

		more.style.maxHeight = more.scrollHeight + "px"; // свойство height делает равным его фактической высоте
		btn.style.display = 'none';
		hide.addEventListener('click', function() {
			more.style.maxHeight = null; // делаем высоту равной 0
			btn.style.display = 'block';
		});
	});	
});


/*--- video.js ---*/
// var videoWrapper = document.querySelectorAll('.video__wrapper');
// var presentationVideo = document.querySelector('.presentation__video');

// videoWrapper.forEach((element) => {
// 	workVideo(element);
// });

// workVideo(presentationVideo);

// function workVideo(el) {
// 	var btn = el.querySelector('.play');
// 	var video = el.querySelector('video');

// 	btn.addEventListener('click', function (e) {
// 		e.preventDefault();
// 		video.play();
// 	});

// 	video.addEventListener('play', function (e) {
// 		btn.classList.add('play--hide');	
// 	});

// 	video.addEventListener('click', function (e) {
// 		if(video.paused) {
// 			video.play();
// 		} else {
// 			video.pause();
// 			btn.classList.remove('play--hide');
// 		}	
// 	});
// }


/*--- accordion.js ---*/
let acc = document.querySelectorAll(".accordion__title");
for (let i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		
		if(this.classList.contains("active")) {
			this.classList.remove("active");
			contentAction(this);
		} else {
			// приводим все элементы аккордена в начальное сотояние
			acc.forEach((elem) => {
				elem.classList.remove('active');
				let text = elem.nextElementSibling;
				if (text.style.maxHeight) {
					text.style.maxHeight = null; // делаем высоту равной 0
				}
			});

			/* Добавление активного класса '.active' кнопке button */		
			this.classList.add("active");
			// this.classList.toggle("active");
			contentAction(this);
		}		
	});
}

/* Появление/скрытие .content за активной кнопкой*/
function contentAction(title) {	
	let content = title.nextElementSibling;		
	if (content.style.maxHeight) {
		content.style.maxHeight = null; // делаем высоту равной 0
	} else {
		content.style.maxHeight = content.scrollHeight + "px"; // свойство height делает равным его фактической высоте
	}
}


/*--- modal.js ---*/
let modalRegistration = document.querySelector('.modal-registration'); // модальное окно

// кнопки, при нажатии на которые должно появитьс соответствующее модальное окно
let btnModalRegistration = document.querySelectorAll('.block__button');

let closeRegistration = document.querySelector('.modal-registration__close');
let overlay = document.querySelector('.overlay');
let removeShowTimeout;

modalButtons(btnModalRegistration); // функция для добавления события на кнопку

function modalButtons() {
	let buttons = Object.values(arguments); // преобразовываем объект в массив из значение его ключей
	const arr = Array.from(buttons[0]); // преобразовываем NodeList в array
	
	arr.forEach((btn) => {
		btn.addEventListener('click', function(evt) {
			evt.preventDefault();
			workModal(modalRegistration, closeRegistration, overlay);
		});	
	});
}

function workModal(modal, close, overlay) {
	/* показ модального окна и overlay */
	modal.classList.remove('modal-hide');
	modal.classList.add('modal-show');
	overlay.classList.add('overlay-show');	

	close.addEventListener('click', function(evt) {
		evt.preventDefault();
		hideModal(modal, overlay);
	});

	overlay.addEventListener('click', function(evt) {
		evt.preventDefault();
		hideModal(modal, overlay);
	});

	// open modal windows if click ESC
	window.addEventListener('keydown', function(evt) {
		if(evt.keyCode === 27) {
			evt.preventDefault();
			hideModal(modal, overlay);
		}
	});
}

/* скрытие модального окна */
function hideModal(modal, overlay) {	
	clearTimeout(removeShowTimeout);
	
	modal.classList.add('modal-hide');	
	overlay.classList.remove('overlay-show');
	
	removeShowTimeout = setTimeout(function() {
		modal.classList.remove('modal-show');
	}, 600);
}


/*--- swiper.js ---*/
const swiperSteps = new Swiper('.steps__list', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 30,
  autoHeight: true, // слайдер подбирает свою высоту в зависимости от высоты слайла
  direction: 'horizontal',
  loop: false,
  // точки навигации
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  }
});