window.addEventListener('load', function() {
	
	/*--- Получение и отображение данных JSON ---*/

	// 1) Получить данные из удаленного API
	async function getUsers() {
		try {
			const response = await fetch(
			// 'https://zyabki.by/JSON/list-test.json',
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

		let ratesPage = []; // скидки для отображения на странице
		let ratesModal = []; // скидки для отображения на модальном окне

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

		listDiscount.forEach((item) => {
			listOldRates.forEach((itemOld) => {
				if(item.name == itemOld.name) {
					let obj = {};
					obj.name = item.name;
					obj.price = item.price;
					obj.oldPrice = itemOld.price;
					switch(item.name) {
						case '1 неделя' : {obj.rate = '-40%'; obj.id = '1-week';} break;
						case '1 месяц' : {obj.rate = '-50%'; obj.id = '1-month';} break;
						case '3 месяца' : {obj.rate = '-60%'; obj.id = '3-month';} break;						
					}
					ratesModal.push(obj);
				}
			});
		});

		renderRatesList(ratesPage); // формирование списка скидок
		renderModalList(ratesModal); // формирование списка скидок модального окна
	});

	const ratesList = document.querySelector('.rates__list'); // контейнер списка скидок
	const ratesItemTemplate = document.querySelector('#rates-item').content; // шаблон одной отдельной скидки
	let items = []; // массив динамически созданных скидок (нужен для того, чтобы обратится к этомй списку и удалить класс .radio--checked)

	const ratesModalList = document.querySelector('.modal-offer__list');
	const ratesItemModalTemplate = document.querySelector('#modal-offer__item').content;
	let itemsModal = [];

	const renderRatesList = (rates) => { // функция формирования списка скидок		

		const ratesItemFragment = document.createDocumentFragment(); // создаем box (... "коробочку" для скидки)		

		rates.forEach((item) => {
			
			const {name, price, oldPrice, rate, tagline, id} = item; // деструктуризация объекта
			const ratesItemElement = ratesItemTemplate.cloneNode(true); // создаем копию разметки скидки			

			let itemParent = ratesItemElement.querySelector('.rates__item-period').parentNode; // т.к. элемент динамический (он будет #document-fragment), то сначала получаем любой дочерний, а уже через него обращаемся к родителю
			items.push(itemParent); // добаваляем днамические скидки в список

			if(rates.indexOf(item) == 0) { // если это первый элемент списка...								
				itemParent.classList.add('radio--checked'); // ...делаем его активным
				itemParent.querySelector('.rates__input').checked = true;
			}

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
				case 'star' : { taglineElement.querySelector('.text').textContent = 'Всегда быть в форме'; taglineElement.querySelector('.hide').textContent = ' и поддерживать своё здоровье'; } break;
				// case 'star' : { taglineElement.querySelector('.text').textContent = 'Всегда быть в форме <span class="hide">и поддерживать своё здоровье</span>'; } break;
			}

			ratesItemElement.querySelector('.rates__input').value = id;
			ratesItemElement.querySelector('.rates__input').id = 'rates-' + id;			
			ratesItemElement.querySelector('.rates__item-label').setAttribute('for', 'rates-' + id);
						
			ratesItemFragment.appendChild(ratesItemElement); // добавляем полученный элемент в наш фрагмент

		});

		ratesList.appendChild(ratesItemFragment); // фрагмент помещаем в итоговый контейнер (список)
		
	};

	const renderModalList = (rates) => { // функция формирования списка скидок

		const ratesItemModalFragment = document.createDocumentFragment(); // создаем box (... "коробочку" для скидки)		

		rates.forEach((item) => {

			const {name, price, oldPrice, rate, id} = item; // деструктуризация объекта
			const ratesItemModalElement = ratesItemModalTemplate.cloneNode(true); // создаем копию разметки скидки			

			let itemModalParent = ratesItemModalElement.querySelector('.modal-offer__item-period').parentNode; // т.к. элемент динамический (он будет #document-fragment), то сначала получаем любой дочерний, а уже через него обращаемся к родителю
			itemsModal.push(itemModalParent);

			if(rates.indexOf(item) == 1) {
				itemModalParent.classList.add('radio--checked');
				itemModalParent.querySelector('.modal-offer__input').checked = true;
			}

			ratesItemModalElement.querySelector('.modal-offer__item-period').textContent = name;			
			ratesItemModalElement.querySelector('.modal-offer__item-price-new > span').textContent = price;
			ratesItemModalElement.querySelector('.modal-offer__item-price-old > span').textContent = oldPrice;
			ratesItemModalElement.querySelector('.modal-offer__item-discount > span').textContent = rate;		

			ratesItemModalElement.querySelector('.modal-offer__input').value = id;
			ratesItemModalElement.querySelector('.modal-offer__input').id = 'modal-offer-' + id;			
			ratesItemModalElement.querySelector('.modal-offer__item-label').setAttribute('for', 'modal-offer-' + id);
						
			ratesItemModalFragment.appendChild(ratesItemModalElement); // добавляем полученный элемент в наш фрагмент

		});

		ratesModalList.appendChild(ratesItemModalFragment); // фрагмент помещаем в итоговый контейнер (список)
		
	};


	/*--- RADIO кнопки ---*/	

	radioChecked(ratesList, items);
	radioChecked(ratesModalList, itemsModal);

	function radioChecked(list,items) {
		
		list.addEventListener('change', function(e) {
			let item = e.target.parentNode; // родительский элемент (... сам элемент списка скидок)		

			items.forEach(function(item) {
				item.classList.remove('radio--checked');
			});
			item.classList.add('radio--checked');
		});		
	}


	/*--- ТАЙМЕР ---*/

	// получаем элементы, содержащие компоненты даты
	// const daysElement = document.querySelector('.timer__days .timer__number');
	// const hoursElement = document.querySelector('.timer__hours .timer__number');
	const minutesElement = document.querySelector('.timer__minutes .timer__number');
	const minutesTextElement = document.querySelector('.timer__minutes .text');	
	const secondsElement = document.querySelector('.timer__seconds .timer__number');
	const secondsTextElement = document.querySelector('.timer__seconds .text');
	const hmElement = document.querySelector('.timer__hm');
	const delElement = hmElement.querySelector('.timer__del');
	const ratesItems = document.querySelectorAll('.rates__item');
	
	// id таймера
	let timerId = null;

	// склонение числительных
	function declensionNum(num, words) {
		return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
	}

	// длительность работы таймера (сек.)
	let interval = 12;
	const timeBoundary = 10;

	// вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
	function countdownTimer() {

		if(interval == timeBoundary) {
			hmElement.classList.add('timer__red');
			hmElement.classList.add('timer__animate');
			delElement.classList.add('timer__pulsate');
		} else if(interval == 0) {
			delElement.classList.remove('timer__pulsate');
			hmElement.classList.remove('timer__animate');
			items.forEach((item) => {
				item.classList.add('no-sales');
			});			
			workModal(modalOffer, closeOffer, overlay); // находится в другом файле
		}

		diff = interval * 1000;	
		if (diff <= 0) {
			clearInterval(timerId); // останавливаем работу таймера при достижении установленного
		}

		// const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
		// const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
		const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
		const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

		// daysElement.textContent = days < 10 ? '0' + days : days;
		// hoursElement.textContent = hours < 10 ? '0' + hours : hours;
		minutesElement.textContent = minutes < 10 ? '0' + minutes : minutes;
		secondsElement.textContent = seconds < 10 ? '0' + seconds : seconds;

		// daysTextElement.textContent = declensionNum(days, ['день', 'дня', 'дней']);
		// hoursTextElement.textContent = declensionNum(hours, ['час', 'часа', 'часов']);		
		minutesTextElement.textContent = declensionNum(minutes, ['минута', 'минуты', 'минут']);
		secondsTextElement.textContent = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);

		interval--;
	}

	// вызываем функцию countdownTimer
	countdownTimer();

	// вызываем функцию countdownTimer каждую секунду
	timerId = setInterval(countdownTimer, 1000);

});