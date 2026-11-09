let menuItem = document.querySelectorAll('.menu__list > li');
let sidebarMenu = document.querySelectorAll('.sidebar__menu > li');
addAnimationDelay(menuItem, 100, 100);
addAnimationDelay(sidebarMenu, 300, 150);

function addAnimationDelay(element, start, diff) {
	element.forEach((el, i) => {
	  el.style.animationDelay = `${i * diff + start}ms`;
	});
}

// let element = document.querySelector('main');
// getTopOverlay();
window.addEventListener('resize', () => {
  // getTopOverlay();
});

// function getTopOverlay() {	
// 	let main = element.getBoundingClientRect();
// 	let topPosition = main.top; // Выведет расстояние от верха элемента до верха видимой области	
// 	overlay.style.top = topPosition - 20 + 'px';
// }

let btnCatalog = document.querySelector('.btn-catalog');
let sidebarMenuList = document.querySelector('.sidebar__menu');
let overlay = document.querySelector('.overlay');

btnCatalog.addEventListener('click', (e) => {
	e.preventDefault();
	overlay.classList.toggle('overlay-show');
	sidebarMenuList.classList.toggle('sidebar__menu-show');

	if(hamburger.classList.contains('hamburger__click')) {
		hamburger.classList.remove('hamburger__click');
		nav.classList.remove('page-header__nav--show');

		if(nav.classList.contains('active')) {
			nav.classList.add('esc');
			setTimeout(function() {
	            nav.classList.remove('active');
	            nav.classList.remove('esc');
	        }, 850);
		} else {
			nav.classList.add('active');
		}
	}
});

/*--- hamburger.js ---*/
let hamburger = document.querySelector('.page-header__toggle-nav');
let nav = document.querySelector('.page-header__nav');

hamburger.addEventListener('click', function (e) {
	e.preventDefault();

	this.classList.toggle('hamburger__click');
	if(this.classList.contains('hamburger__click')) {
		nav.classList.add('page-header__nav--show');
	} else {
		nav.classList.remove('page-header__nav--show');
	}

	if(sidebarMenuList.classList.contains('sidebar__menu-show')) {
		overlay.classList.remove('overlay-show');
		sidebarMenuList.classList.remove('sidebar__menu-show');
	}

	if(nav.classList.contains('active')) {
		nav.classList.add('esc');
		setTimeout(function() {
            nav.classList.remove('active');
            nav.classList.remove('esc');
        }, 850);
	} else {
		nav.classList.add('active');
	}
});




/*--- swiper.js ---*/
const swiper = new Swiper('.slider__list', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 30,

  // // direction: 'horizontal',
  loop: false,

  // pagination: {
  //   el: '.slider__pagination',
  //   clickable: true
  // },
  navigation: {
    nextEl: '.slider__next',
    prevEl: '.slider__prev',
  },
  

  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true
  // },

  // // Navigation arrows
  // navigation: {
  //   nextEl: '.next',
  //   prevEl: '.prev',
  // },

  // breakpoints: {    
  //   // when window width is >= 768px
  //   // 768: {
  //   //     slidesPerView: 2,
  //   //     spaceBetween: 0        
  //   // },
  //   // 960: {       
  //   //     spaceBetween: 30
  //   // },
  //   // 1600: {
  //   //     slidesPerView: 3        
  //   // }

  //   // 768: {
  //   //     slidesPerView: 2,
  //   //     spaceBetween: 0,
  //   //     width: 700, // ширина смещения слайдера
  //   // },
  //   // 960: {       
  //   //     slidesPerView: 2,
  //   //     spaceBetween: 30,
  //   //     width: 800, // ширина смещения слайдера
  //   // },
  //   // 1200: {       
  //   //     slidesPerView: 2,
  //   //     spaceBetween: 30,
  //   //     width: 800, // ширина смещения слайдера
  //   // },
  //   // 1400: {       
  //   //     slidesPerView: 2,
  //   //     spaceBetween: 30,
  //   //     width: 800, // ширина смещения слайдера
  //   // },
  //   // 1600: {
  //   //     slidesPerView: 3,
  //   //     spaceBetween: 30,
  //   //     width: 1314, // ширина смещения слайдера
  //   // }
  // }
});


swiper.on('slideChangeTransitionStart', () => {
  document.querySelectorAll('.slider__description').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateX(-120px)';
  });
});

swiper.on('slideChangeTransitionEnd', () => {
  document.querySelectorAll('.swiper-slide-active .slider__description').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'translateX(0)';
  });
});













/*--- hamburger.js ---*/
// let hamburger = document.querySelector('.page-header__toggle-nav');
// let nav = document.querySelector('.page-header__nav');

// hamburger.addEventListener('click', function (e) {
// 	e.preventDefault();

// 	if(this.classList.contains('hamburger__click')) {
// 		hamburgerHide();
// 	} else {
// 		nav.classList.add('page-header__nav--show');
// 		hamburger.classList.add('hamburger__click');
// 	}

// 	if(nav.classList.contains('active')) {
// 		console.log('YES');
// 		nav.classList.add('esc');
// 		setTimeout(function() {
//             nav.classList.remove('active');
//             nav.classList.remove('esc');
//         }, 850);
// 	} else {
// 		console.log('NO');
// 		nav.classList.add('active');
// 	}
// });

// function hamburgerHide() {
// 	nav.classList.remove('page-header__nav--show');
// 	hamburger.classList.remove('hamburger__click');
// }


// let menuItem = document.querySelectorAll('.menu__item > a');
// var dropdown = document.querySelectorAll('.menu__dropdown');

// /* работа главного меню */
// menuItem.forEach(function(el) { // перебираем массив
// 	el.addEventListener('click', function (e) {
// 		e.preventDefault();		
		
// 		hideDropdown();

// 		let dropdown = el.nextElementSibling;
// 		dropdown.style.height = dropdown.scrollHeight + 'px';
		
// 		if(dropdown.classList.contains('menu__dropdown-show')) {
// 			dropdown.classList.remove('menu__dropdown-show');
// 			hideDropdown();
// 		} else {
// 			dropdown.classList.add('menu__dropdown-show');
// 		}
// 	});
// });

// function hideDropdown() { 
// 	dropdown.forEach(function(el) { //скрыть все подменю
// 		el.style.height = '0';
// 		el.classList.remove('menu__dropdown-show');
// 	});
// }




/*--- search.js ---*/
/*let searchIcon = document.querySelectorAll('.search svg');
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
});*/

/*--- modal.js ---*/
// let modalProject = document.querySelector('.modal-project'); // модальное окно
// // кнопки, при нажатии на которые должно появитьс соответствующее модальное окно
// let btnModalProject = document.querySelectorAll('.page-header__fos, .sta__button');
// let closeProject = document.querySelector('.modal-project__close');

// let modalOrder = document.querySelector('.modal-order'); // модальное окно
// let btnModalOrder = document.querySelectorAll('.promo__button');
// let closeOrder = document.querySelector('.modal-order__close');

// let overlay = document.querySelector('.overlay');
// let removeShowTimeout;

// modalButtons(btnModalProject, modalProject, closeProject); // функция для добавления события на кнопку
// modalButtons(btnModalOrder, modalOrder, closeOrder); // функция для добавления события на кнопку

// function modalButtons() {
// 	let buttons = Object.values(arguments); // преобразовываем объект в массив из значение его ключей
// 	const arr = Array.from(buttons[0]); // преобразовываем NodeList в array
// 	arr.forEach((btn) => {
// 		btn.addEventListener('click', function(evt) {
// 			evt.preventDefault();
// 			workModal(buttons[1], buttons[2], overlay);
// 			// workModal(modalProject, closeProject, overlay);
// 		});	
// 	});
// }

// function workModal(modal, close, overlay) {
// 	/* показ модального окна и overlay */
// 	modal.classList.remove('modal-hide');
// 	modal.classList.add('modal-show');
// 	overlay.classList.add('overlay-show');	

// 	close.addEventListener('click', function(evt) {
// 		evt.preventDefault();
// 		hideModal(modal, overlay);
// 	});

// 	overlay.addEventListener('click', function(evt) {
// 		evt.preventDefault();
// 		hideModal(modal, overlay);
// 	});

// 	// open modal windows if click ESC
// 	window.addEventListener('keydown', function(evt) {
// 		if(evt.keyCode === 27) {
// 			evt.preventDefault();
// 			hideModal(modal, overlay);
// 		}
// 	});
// }

// /* скрытие модального окна */
// function hideModal(modal, overlay) {	
// 	clearTimeout(removeShowTimeout);
	
// 	modal.classList.add('modal-hide');	
// 	overlay.classList.remove('overlay-show');
	
// 	removeShowTimeout = setTimeout(function() {
// 		modal.classList.remove('modal-show');
// 	}, 600);
// }