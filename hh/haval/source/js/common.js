/*--- hamburger.js ---*/
let hamburger = document.querySelector('.page-header__toggle-nav');
let navList = document.querySelector('.page-header__nav-list');

let btnModels = document.querySelector('.page-header__btn-models');
let navModels = document.querySelector('.page-header__nav-models');



hamburger.addEventListener('click', function (e) {
	e.preventDefault();

	if(btnModels.classList.contains('models__click')) {
		modelsHide();
	}

	if(this.classList.contains('hamburger__click')) {
		hamburgerHide();
	} else {
		navList.classList.add('page-header__nav-list--show');
		hamburger.classList.add('hamburger__click');
	}
});

function hamburgerHide() {
	navList.classList.remove('page-header__nav-list--show');
	hamburger.classList.remove('hamburger__click');
}


btnModels.addEventListener('click', function (e) {
	e.preventDefault();

	if(hamburger.classList.contains('hamburger__click')) {
		hamburgerHide();
	}

	if(this.classList.contains('models__click')) {
		modelsHide();
	} else {
		navModels.classList.add('page-header__nav-models--show');
		btnModels.classList.add('models__click');
	}
});

function modelsHide() {
	navModels.classList.remove('page-header__nav-models--show');
	btnModels.classList.remove('models__click');
}



// /*--- hamburger.js ---*/
// let hamburger = document.querySelector('.page-header__toggle-nav');
// let navList = document.querySelector('.page-header__nav-list');

// hamburger.addEventListener('click', function (e) {
// 	e.preventDefault();

// 	if(this.classList.contains('hamburger__click')) {
// 		hamburgerHide();
// 	} else {
// 		navList.classList.add('page-header__nav-list--show');
// 		hamburger.classList.add('hamburger__click');
// 	}
// });

// function hamburgerHide() {
// 	navList.classList.remove('page-header__nav-list--show');
// 	hamburger.classList.remove('hamburger__click');
// }



// let btnModels = document.querySelector('.page-header__btn-models');
// let navModels = document.querySelector('.page-header__nav-models');

// btnModels.addEventListener('click', function (e) {
// 	e.preventDefault();

// 	if(this.classList.contains('models__click')) {
// 		modelsHide();
// 	} else {
// 		navModels.classList.add('page-header__nav-models--show');
// 		btnModels.classList.add('models__click');
// 	}
// });

// function modelsHide() {
// 	navModels.classList.remove('page-header__nav-models--show');
// 	btnModels.classList.remove('models__click');
// }