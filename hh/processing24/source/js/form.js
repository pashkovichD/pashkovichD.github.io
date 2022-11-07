
var inputs = document.querySelectorAll('.form__input');
var labels = document.querySelectorAll('.form__label');

// удаляем стили для отображения формы, на случай, когда не работает JS
var forms = document.querySelectorAll('.form'); // на странице таких форм может быть несколько

forms.forEach(function(el) {
	el.classList.remove('form--nojs');
});

labels.forEach(function(el) {
	el.classList.add('form__label--start'); // все label'ы в исходное состояние
});

// inputs[0].focus(); // ставим фокус в первый input
// inputs[0].nextSibling.nextSibling.classList.remove('form__label--start'); // состояние фокуса в первом input'е

inputs.forEach(function(el) {	

	/* если при запуске странице в поле есть значение value... например, при возврате на эту страницу после отправки формы */
	if(el.value != '') {		
		lab = el.nextSibling.nextSibling;
		lab.classList.remove('form__label--start');
	}

	el.addEventListener('focus', function (e) {
		lab = this.nextSibling.nextSibling;
		if(lab.classList.contains('form__label--start')) {
			lab.classList.remove('form__label--start');
			lab.style.color = '#e28605';
		} else {
			lab.style.color = '#e28605';
		}
	});

	el.addEventListener('blur', function (e) {
		lab = this.nextSibling.nextSibling;
		if(!lab.classList.contains('form__label--start')) {			
			lab.style.color = '#c7c7c7';
			if(this.value == '') {				
				lab.classList.add('form__label--start');	
			} else {
				
			}
		}
	});
});