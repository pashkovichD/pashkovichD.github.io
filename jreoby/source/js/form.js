var inputs = document.querySelectorAll('.form__input');
var labels = document.querySelectorAll('.form__label');

var attach = document.querySelectorAll('.form__attach-input'); // на странице input file может быть несколько
var formFilename = document.querySelectorAll('.form__filename'); // аналогично, на странице form__filename может быть несколько

var form = document.querySelector('.form');
// var form = getElementsByClassName('.form');
var formNotice = document.querySelectorAll('.form__notice');
var formError = document.querySelector('.form__notice--error');
var formSuccesfull = document.querySelector('.form__notice--succesfull');

var files_error = false;

// удаляем стили для отображения формы, на случай, когда не работает JS
var forms = document.querySelectorAll('.form'); // на странице таких форм может быть несколько
forms.forEach(function(el) {
	el.classList.remove('form--nojs');
});

labels.forEach(function(el) {
	el.classList.add('form__label--start'); // все label'ы в исходное состояние
});

inputs[0].focus(); // ставим фокус в первый input
inputs[0].nextSibling.nextSibling.classList.remove('form__label--start'); // состояние фокуса в первом input'е

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
			lab.style.color = '#c3c3c3';
			if(this.value == '') {
				lab.classList.add('form__label--start');	
			}
		}
	});
});

/* т.к. input file на странице может быть несколько, то перебираем массив из всех таких input'ов */
/*--- Примечание: Была проблема с работой нескольких input file... как потом оказалось нужно всем (если их несколько на странице) input file давать разные id и соответствующим label такие же for. Иначе всё работает только на первый input file ---*/
attach.forEach(function(el) {
	el.addEventListener('change', function (e) { // слушаем событие изменения input file
		// str = this.value; // полное имя выбранного файла
		files_error = true;
		files = el.files; // массив прикрепленных файлов

		size_allow = 2048; // Kb
		ext_allow = ["doc", "docx", "rtf", "jpg", "jpeg", "bmp", "png", "pdf", "txt", "zip", "rar"]; // допустимые форматы

		file_size = Math.round(files[0].size/1024); // в Kb
		file_ext = files[0].name.split(".").splice(-1,1)[0].toLowerCase();

		ext_allow.forEach(function(el) {
			if(el == file_ext) {
				if(file_size <= size_allow) {
					files_error = false;
				}
				
			}
		});
		// находим инденкс элемента, после которого начинается имя файла
		/*if (str.lastIndexOf('\\')){
			var i = str.lastIndexOf('\\')+1;
		}
		else{
			var i = str.lastIndexOf('/')+1;
		}
		var filename = str.slice(i); // получаем имя файла*/
		
		var filename = el.files[0].name; // получаем имя файла
		
		parent = this.parentNode; // определяем родителя у загружаемого input[file], чтобы потом по общему родителю найти нужный параграф form__filename для записи в него имени файла

		formFilename.forEach(function(t) { // перебираем массив form__filename и по общему родителю находим нужный
			if(parent == t.parentNode) {
				t.innerHTML = filename; // записываем имя файла
			}
		});
	});
});

form.addEventListener('submit', function (e) {
	e.preventDefault(); // запрещаем отправку формы
	hideNotice();
	error = false;

	inputs.forEach(function(el) {
		if(el.value != '') {
			if(el.getAttribute('type') == 'email') {
				mailRegExp = /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,6}$/;
				if(!mailRegExp.test(el.value)) {
					error = true;
				}
			}
		} else {
			error = true;
		}
	});

	if(files_error) {
		error = true;
	}

	if(error) {
		formError.classList.add('form__notice--show');
	}	else {		
		formSuccesfull.classList.add('form__notice--show');
		form.submit();
	}
});

function hideNotice() {
	formNotice.forEach(function(el) {		
		el.classList.remove('form__notice--show');
	});
}