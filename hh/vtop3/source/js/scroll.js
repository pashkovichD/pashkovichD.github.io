window.addEventListener('load', function(){
	let menu = document.querySelector('.page-header__number');
	let links = this.document.querySelectorAll('.page-header__number .page-header__number-item');
	let btnBottom = document.querySelector('.page-header__btn-scroll');
	let header = document.querySelector('.page-header');
	let classItem = 'page-header__number-item';
	let classActiveItem = 'active';
	
	if(window.location.hash != '') {
		scrollToId(window.location.hash);
	}

	scrollToY(0); // при обновлении страницы scroll в начало страницы (если мы находились на момент обновления где-то ниже)
	
	menu.addEventListener('click', function(e){
		
		if(e.target.classList.contains(classItem)) {
			e.preventDefault();
			let link = e.target;			
			scrollToId(link.hash);			
		}		
	});

	let scrolls = 0;
	let scrollTimeout;
	let delay = 100;
	
	window.addEventListener('scroll', function(e) {
		clearTimeout(scrollTimeout); // ...удаляем setTimeout(), определенный ниже.
		scrollTimeout = setTimeout(function() { // ставим выполнение задачи через delay (в нашем случае 100 мс). Если перестали scroll'ить, то через 100 мс сработает целевая функция onScroll(). Если же до 100 мс мы ещё раз про'scroll'или, то выше... и получаем новый интервал в 100 мс, если на протяжении этого интервала опять scroll'им, то получаем опять новый интервал на 10 мс и т.д. пока не "затихнем" на более 100 мс --- в таком случае сработает целевая функция.

		// При таком подходе получаем минимум сработок целевой функции (получается, что целевая функция сработает только при завершении scroll'инга, после интервала в 100 мс). А, соответственно, увеличение производительности и ускорение работы кода.
			
			onScroll(e);
		}, delay);
	});

	function onScroll(e) {		
		// console.log(++scrolls);
		let pos = window.pageYOffset; // количество прокрученных (про'scroll'еных) пикселей
		
		for(let i = links.length - 1; i >= 0; i--) {
			let link = links[i];
			let header = document.querySelector(link.hash);

			(link.hash == '#info') ? buttonUp() : buttonDown();

			if(pos > (elemOffsetTop(header) - this.window.innerHeight/2)) {
				menu.querySelector('.' + classActiveItem).classList.remove(classActiveItem);
				link.classList.add(classActiveItem);
				break;
			}
		}		
	}

	function scrollToId(id) {		
		let target = document.querySelector(id);
		let styles = window.getComputedStyle(target); // стили целевого блока
		let marginTopTarget = parseFloat(styles.marginTop); // верхний отступ целевого блока

		let stylesHeader = window.getComputedStyle(header);	// стили header'а
		let marginBottomHeader = parseFloat(stylesHeader.marginBottom); // нижний отступ header'а

		if(target !== null) {
			let pos = elemOffsetTop(target) - marginTopTarget;
			if(id == '#intro' || id == '#advantages') {				
				pos = elemOffsetTop(target) - header.clientHeight - marginBottomHeader - marginTopTarget;
			}

			(id == '#info') ? buttonUp() : buttonDown();
			
			// let pos = elemOffsetTop(target) - header.clientHeight - marginBottomHeader - marginTopTarget; // вычитаем высоту header'а, нижний отступ header'а и верхний внешний отступ заголовка			
			scrollToY(pos);
		}
	}

	btnBottom.addEventListener('click', function() {
		let pos = window.pageYOffset;

		for(let i = 0; i <= links.length - 2; i++) {
			let nextSection = links[i+1].hash;
			let header = document.querySelector(nextSection);			

			if(nextSection == '#advantages') {
				pos = pos + 102;
			}			

			if(nextSection == '#info') {
				buttonUp();
			}

			if(pos < (elemOffsetTop(header))) {
				scrollToId(nextSection);
				break;
			} else {
				scrollToY(0);
				buttonDown();
			}
		}
	});

	function buttonUp() {
		btnBottom.classList.add('btn-up');
		btnBottom.querySelector('span').innerHTML = 'вверх';
	}

	function buttonDown() {
		btnBottom.classList.remove('btn-up');
		btnBottom.querySelector('span').innerHTML = 'вниз';
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