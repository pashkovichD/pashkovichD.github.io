window.addEventListener('load', function(){

	let links = this.document.querySelectorAll('.menu__list .menu__item a, .promo__button, .info__button');	
	
	if(window.location.hash != '') {
		scrollToId(window.location.hash);
	}	

	scrollToY(0); // при обновлении страницы scroll в начало страницы (если мы находились на момент обновления где-то ниже)
	
	links.forEach((link) => {
		link.addEventListener('click', function(e){
			e.preventDefault();
			// console.log(link.hash);
			scrollToId(link.hash);
		});
	});

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