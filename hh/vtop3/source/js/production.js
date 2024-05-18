window.addEventListener('load', function() {
	const productionBigImg = document.querySelector('.production__big-img');

	const productionBigImgTemplate = document.querySelector('#big-img-template')
		.content
		.querySelector('.production__big-img-item');

	// console.log(productionBigImgTemplate);

	const renderBigImgList = (img) => {
		

		const bigImgListFragment = document.createDocumentFragment();

		const wizardElement = productionBigImgTemplate.cloneNode(true);
		console.log(wizardElement.querySelector('img'));
		// wizardElement.querySelector('img').textContent = img;
		// wizardElement.querySelector('.wizard-coat').style.fill = coatColor;
		// wizardElement.querySelector('.wizard-eyes').style.fill = eyesColor;

		bigImgListFragment.appendChild(wizardElement);

		/*similarWizards.forEach(({name, coatColor, eyesColor}) => {
			const wizardElement = similarWizardTemplate.cloneNode(true);
			wizardElement.querySelector('.setup-similar-label').textContent = name;
			wizardElement.querySelector('.wizard-coat').style.fill = coatColor;
			wizardElement.querySelector('.wizard-eyes').style.fill = eyesColor;
			similarListFragment.appendChild(wizardElement);
		});*/

		productionBigImg.appendChild(bigImgListFragment);
	};

	





	let productionList = document.querySelector('.production__list');
	let itemZoom = document.querySelectorAll('.production__item-zoom');

	productionList.addEventListener('click', function(e){		
		// if(e.target.classList.contains('swiper-slide')) {
		if(e.target.classList.contains('production__item-zoom')) {
			e.preventDefault();
			let link = e.target;
			let img = link.parentElement.querySelector('picture img');
			// console.dir(img);
			// console.log('outerHTML = ' + img.outerHTML);
			
			// console.log('src = ' + img.src);
			// console.log('srcset = ' + img.srcset);
			// console.log('alt = ' + img.alt);
			renderBigImgList(img.outerHTML);
		}
	});

});