document.addEventListener('DOMContentLoaded', function() { // DOMContentLoaded - браузер загрузил HTML и построил DOM-дерево

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
	let interval = 10;
	const timeBoundary = 5;

	// вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
	function countdownTimer() {

		if(interval == timeBoundary) {
			hmElement.classList.add('timer__red');
			delElement.classList.add('timer__pulsate');
		} else if(interval == 0) {
			delElement.classList.remove('timer__pulsate');
			ratesItems.forEach((item) => {
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