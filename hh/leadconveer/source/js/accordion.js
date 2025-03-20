// let acc = document.querySelectorAll(".accordion__title");
// for (let i = 0; i < acc.length; i++) {
// 	acc[i].addEventListener("click", function() {
		
// 		/* Добавление/удаление активного класса '.active' кнопке button */
// 		this.classList.toggle("active");

// 		/* Появление/скрытие .content за активной кнопкой*/
// 		let content = this.nextElementSibling;
		
// 		if (content.style.maxHeight) {
// 			content.style.maxHeight = null; // делаем высоту равной 0
// 		} else {
// 			content.style.maxHeight = content.scrollHeight + "px"; // свойство height делает равным его фактической высоте
// 		}
// 	});
// }

// let acc = document.querySelectorAll(".accordion__title");

// acc.forEach((title) => {
// 	title.addEventListener("click", function() {		
		
// 		// acc.forEach((el) => {
// 		// 	el.classList.remove('active');
// 		// });
// 		// this.classList.toggle("active");
		

// 		if(this.classList.contains('active')) {
// 			acc.forEach((el) => {
// 				el.classList.remove('active');
// 			});
// 			// this.classList.remove('active');
// 		} else {			
// 			acc.forEach((el) => {
// 				el.classList.remove('active');
// 			});
// 			this.classList.add('active');
// 		}

// 		let content = this.nextElementSibling;
// 		if (content.style.maxHeight) {
// 			content.style.maxHeight = null; // делаем высоту равной 0
// 		} else {
// 			content.style.maxHeight = content.scrollHeight + "px"; // свойство height делает равным его фактической высоте
// 		}
// 	});
// });

// function () {
	
// }