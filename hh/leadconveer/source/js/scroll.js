window.addEventListener('load', function(){
	// let menu = document.querySelector('.page-header__number');

	let links = this.document.querySelectorAll('.menu__list .menu__item a, .promo__button, .info__button');
	// let links = this.document.querySelectorAll('.page-header__number .page-header__number-item');

	// let btnBottom = document.querySelector('.page-header__btn-scroll');
	// let header = document.querySelector('.page-header');
	// let classItem = 'page-header__number-item';
	// let classActiveItem = 'active';
	
	// if(window.location.hash != '') {
	// 	scrollToId(window.location.hash);
	// }

	// console.log(links);

	scrollToY(0); // при обновлении страницы scroll в начало страницы (если мы находились на момент обновления где-то ниже)
	
	links.forEach((link) => {
		link.addEventListener('click', function(e){
			e.preventDefault();
			// console.log(link.hash);
			scrollToId(link.hash);
		});
	});	

	/*menu.addEventListener('click', function(e){
		if(e.target.classList.contains(classItem)) {
			e.preventDefault();
			let link = e.target;
			scrollToId(link.hash);
		}
	});*/

	function scrollToId(id) {		
		let target = document.querySelector(id);		
		let styles = window.getComputedStyle(target); // стили целевого блока
		let marginTopTarget = parseFloat(styles.marginTop); // верхний отступ целевого блока
		if(marginTopTarget == 0) {
			marginTopTarget = 30;
		}


		if(target !== null) {
			let pos = elemOffsetTop(target) - marginTopTarget;
			scrollToY(pos);
		}
	}
});


function scrollToY(pos) {
	window.scrollTo({
		top: pos,
		behavior: 'smooth'
	});
}

function elemOffsetTop(node) {
	let coords = node.getBoundingClientRect();
	return window.pageYOffset + coords.top;
}