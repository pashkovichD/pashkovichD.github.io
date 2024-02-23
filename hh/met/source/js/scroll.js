window.addEventListener('load', function(){
	let menu = document.querySelector('.page-header__number');
	let classActiveItem = 'page-header__number-item--active';

	/* Данная проверка нужна при переходе на страницу по ссылке и якорю, т.е. типа http://ссылка#якорь
		В таком случае при переходе на страницу, страница открывается и плавно прокручивается к нужному блоку	
	*/	
	if(window.location.hash != '') {
		scrollToId(window.location.hash);
	}
	
	menu.addEventListener('click', function(e){
		// console.log('OK');
		if(e.target.classList.contains('page-header__number-item')) { // если кликнули по ссылке из .page-header__number --- обрабатываем клик по методу ВСПЛЫТИЯ			
			e.preventDefault(); // отменяем действие по умолчанию, т.к. в таком случаем всё равно резкий переход и behavior: 'smooth' (см. ниже) не срабатывает

			

			let link = e.target;
			console.dir(link);
			// console.log(link);
			// console.dir(link); // список всех свойств выбранного объекта (среди них есть свойство hash, в котором и будет наш якорь)
			scrollToId(link.hash);

			/* Подсветка пункта меню. Легко сделать при клике (при переходе н страницу по ссылке типа http://ссылка#якорь нужно делать по-другому). */
			/*menu.querySelector('.' + classActiveItem).classList.remove(classActiveItem);
			link.classList.add(classActiveItem);*/



			menu.querySelector('.page-header__number-item--active').classList.remove('page-header__number-item--active');
			link.classList.add('page-header__number-item--active');
		}
		
	});
});

function scrollToId(id) {	
	let target = document.querySelector(id);

	/* ПРОВЕРКА. Пункт меню есть, а заголовка (id, который равен якорю ссылки) - нет. 
		В таком случае будем получать ошибку в консоли. Т.е. в переменной target (см. выше) будет null (ничего не найдено)			
		Правильнее, конечно, делать с помощью try {} catch... Но это уже позже
	*/
	if(target !== null) { // проверка на отсутствующий id (чтобы этого избежать). В таком случае код будет выполняться только при существующим id блока.
		// console.log(target.offsetTop);
		let pos = target.offsetTop - 70;
		window.scrollTo({
			top: pos,
			behavior: 'smooth'
		});
	}
}