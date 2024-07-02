window.addEventListener('load', function() {
	
	// 1) Получить данные из удаленного API
	async function getUsers() {
		try {
			const response = await fetch(
			'https://t-pay.iqfit.app/subscribe/list-test',
			{
				method: 'GET',
			},
		);

		if (!response.ok) { // в случае неполучения данных
			throw new Error(`Error! status: ${response.status}`);
		}

		const data = await response.json(); // полученные данные

		return data;

		} catch (error) {
			console.log(error);
		}
	}



	// 2) Отображение данных в HTML
	getUsers().then(data => {

		// console.dir(data); // вывод полученных данных в консоль для проверки

		let listDiscount = []; // массив для списка скидок на Pop-Up
		let listPopular = []; // массив для списка скидок новых цен
		let listOldRates = []; // массив для списка скидок старых цен

		// разделяем массив объектов на нужные массивы
		data.forEach((rate) => {
			if(rate.isDiscount === true) {
				listDiscount.push(rate);
			} else if(rate.isPopular === true) {
				listPopular.push(rate);
			} else {
				listOldRates.push(rate);
			}
		});

		// console.log(listDiscount);
		// console.log(listPopular);
		// console.log(listOldRates);

		let ratesPage = []; // скидки для отображения на странице

		listPopular.forEach((item) => {
			listOldRates.forEach((itemOld) => {
				if(item.name == itemOld.name) {
					let obj = {};
					obj.name = item.name;
					obj.price = item.price;
					obj.oldPrice = itemOld.price;
					switch(item.name) {
						case '1 неделя' : {obj.rate = '-30%'; obj.tagline = 'super'; obj.id = '1-week';} break;
						case '1 месяц' : {obj.rate = '-40%'; obj.tagline = 'power'; obj.id = '1-month';} break;
						case '3 месяца' : {obj.rate = '-50%'; obj.tagline = 'fire'; obj.id = '3-month';} break;
						case 'навсегда' : {obj.rate = '-70%'; obj.tagline = 'star'; obj.id = 'forever';} break;
					}
					ratesPage.push(obj);
				}
			});
		});

		// console.log(ratesPage);


		renderRatesList(ratesPage); // формирование списка скидок

		// const ol = document.createElement('ol');

		// data.forEach(user => {
		// const li = document.createElement('li');
		// li.innerHTML = user.name;

		// li.style.fontSize = '22px';

		// const ul = document.createElement('ul');

		// const company = document.createElement('li');
		// company.innerHTML = `Company: ${user.company.name}`;

		// const city = document.createElement('li');
		// city.innerHTML = `City: ${user.address.city}`;

		// const email = document.createElement('li');
		// email.innerHTML = `Email: ${user.email}`;

		// const phone = document.createElement('li');
		// phone.innerHTML = `Phone: ${user.phone}`;

		// ul.append(...[company, city, email, phone]);

		// li.appendChild(ul);

		// ol.appendChild(li);
		// });

		// const container = document.getElementById('container');
		// container.appendChild(ol);

	});


	const ratesList = document.querySelector('.rates__list'); // контейнер списка скидок
	const ratesItemTemplate = document.querySelector('#rates-item').content; // шаблон одной отдельной скидки

	const renderRatesList = (rates) => { // функция формирования списка скидок		

		const ratesItemFragment = document.createDocumentFragment(); // создаем box (... "коробочку" для скидки)
		// const bigImgListFragment = document.createDocumentFragment();

		// const ratesItemElement = ratesItemTemplate.cloneNode(true); // создаем копию разметки скидки
		// const wizardElement = productionBigImgTemplate.cloneNode(true);	

		rates.forEach((item) => {
			
			const {name, price, oldPrice, rate, tagline, id} = item; // деструктуризация объекта
			const ratesItemElement = ratesItemTemplate.cloneNode(true); // создаем копию разметки скидки			
			
			ratesItemElement.querySelector('.rates__item-period').textContent = name;			
			ratesItemElement.querySelector('.rates__item-price .new > span').textContent = price;
			ratesItemElement.querySelector('.rates__item-price .old > span').textContent = oldPrice;
			ratesItemElement.querySelector('.rates__item-discount > span').textContent = rate;
			
			const taglineElement = ratesItemElement.querySelector('.rates__item-tagline');
			taglineElement.classList.add('rates__item-tagline--' + tagline);

			switch(tagline) {
				case 'super' : { taglineElement.querySelector('.text').textContent = 'Чтобы просто начать';	} break;
				case 'power' : { taglineElement.querySelector('.text').textContent = 'Привести тело в порядок';	} break;
				case 'fire' : { taglineElement.querySelector('.text').textContent = 'Изменить образ жизни';	} break;
				case 'star' : { taglineElement.querySelector('.text').textContent = 'Всегда быть в форме';	} break;
			}

			ratesItemElement.querySelector('.rates__input').value = id;
			ratesItemElement.querySelector('.rates__input').id = 'rates-' + id;
			// console.log(ratesItemElement.querySelector('.rates__item-label').getAttribute('for'));
			ratesItemElement.querySelector('.rates__item-label').setAttribute('for', 'rates-' + id);
						
			ratesItemFragment.appendChild(ratesItemElement); // добавляем полученный элемент в наш фрагмент
		});		

		ratesList.appendChild(ratesItemFragment); // фрагмент помещаем в итоговый контейнер (список)
	};


	// renderRatesList();

	/*let productionList = document.querySelector('.production__list');
	let itemZoom = document.querySelectorAll('.production__item-zoom');

	productionList.addEventListener('click', function(e){		
		if(e.target.classList.contains('production__item-zoom')) {
			e.preventDefault();
			let link = e.target;
			let img = link.parentElement.querySelector('picture img');
			
			renderBigImgList(img.outerHTML);
		}
	});*/


	// const productionBigImg = document.querySelector('.production__big-img');

	// const productionBigImgTemplate = document.querySelector('#big-img-template')
	// 	.content
	// 	.querySelector('.production__big-img-item');

	// // console.log(productionBigImgTemplate);

	// const renderBigImgList = (img) => {
		

	// 	const bigImgListFragment = document.createDocumentFragment();

	// 	const wizardElement = productionBigImgTemplate.cloneNode(true);
	// 	console.log(wizardElement.querySelector('img'));
	// 	// wizardElement.querySelector('img').textContent = img;
	// 	// wizardElement.querySelector('.wizard-coat').style.fill = coatColor;
	// 	// wizardElement.querySelector('.wizard-eyes').style.fill = eyesColor;

	// 	bigImgListFragment.appendChild(wizardElement);

	// 	/*similarWizards.forEach(({name, coatColor, eyesColor}) => {
	// 		const wizardElement = similarWizardTemplate.cloneNode(true);
	// 		wizardElement.querySelector('.setup-similar-label').textContent = name;
	// 		wizardElement.querySelector('.wizard-coat').style.fill = coatColor;
	// 		wizardElement.querySelector('.wizard-eyes').style.fill = eyesColor;
	// 		similarListFragment.appendChild(wizardElement);
	// 	});*/

	// 	productionBigImg.appendChild(bigImgListFragment);
	// };


	// let productionList = document.querySelector('.production__list');
	// let itemZoom = document.querySelectorAll('.production__item-zoom');

	// productionList.addEventListener('click', function(e){		
	// 	if(e.target.classList.contains('production__item-zoom')) {
	// 		e.preventDefault();
	// 		let link = e.target;
	// 		let img = link.parentElement.querySelector('picture img');
			
	// 		renderBigImgList(img.outerHTML);
	// 	}
	// });

});