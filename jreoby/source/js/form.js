var inputs = document.querySelectorAll('.form__input');
var labels = document.querySelectorAll('.form__label');

var attach = document.querySelectorAll('.form__attach-input'); // на странице input file может быть несколько
var formFilename = document.querySelectorAll('.form__filename'); // аналогично, на странице form__filename может быть несколько

var form = document.querySelector('.form');
// var form = getElementsByClassName('.form');
var formNotice = document.querySelectorAll('.form__notice');
var formError = document.querySelector('.form__notice--error');
var formSuccesfull = document.querySelector('.form__notice--succesfull');



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
	el.addEventListener('focus', function (e) {
		lab = this.nextSibling.nextSibling;
		if(lab.classList.contains('form__label--start')) {
			lab.classList.remove('form__label--start');
			// lab.style.color = '#329a00';
			lab.style.color = '#e28605';
		} else {
			// lab.style.color = '#329a00';
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
		str = this.value; // полное имя выбранного файла

		// находим инденкс элемента, после которого начинается имя файла
		if (str.lastIndexOf('\\')){
			var i = str.lastIndexOf('\\')+1;
		}
		else{
			var i = str.lastIndexOf('/')+1;
		}

		var filename = str.slice(i); // получаем имя файла			
		
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
	formNotice.forEach(function(el) {		
		if(el.classList.contains('form__notice--show')) {
			el.classList.delete('form__notice--show');
		}
	});

	// formError.classList.delete('form__notice--show');
	// formSuccesfull.classList.delete('form__notice--show');

	error = false;
	// alert('OK');

	inputs.forEach(function(el) {
		console.log(el.value);
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

	// alert(error);

	if(error) {
		// hideNotice();
		formError.classList.add('form__notice--show');
	}	else {
		// hideNotice();
		formSuccesfull.classList.add('form__notice--show');
		form.submit();
	}

	// alert(i);

});

function hideNotice() {
	formNotice.forEach(function(el) {		
		el.classList.delete('form__notice--show');
	});	
}

// var el_field = new Array("el_firstname", "el_name", "el_secondname", "el_address", "el_email", "el_message");//поля обязательные 

// $("#el_form").submit(function() {// обрабатываем отправку формы

// $(".el_error").fadeOut(); // скрываем поле
// $(".el_error_file").fadeOut(); // скрываем поле

// var error = 0;
// var error_file = 0;    

// // alert('ДО проверки error = ' + error);

// $("#el_form").find(":input").each(function() {// проверяем каждое поле в форме

// if($(this).attr("name") == "el_file") {       

// if($(this).val()){// если в поле пусто              

// error_file = 1;
// var size_allow = 2000; // Kb
// var ext_allow = ["doc", "docx", "rtf", "jpg", "jpeg", "bmp", "png", "pdf", "txt", "zip", "rar"]; // допустимые форматы

// var file_name = document.getElementById('el_file').files[0].name;
// var file_size = document.getElementById('el_file').files[0].size/1024; // в Kb
// var file_ext = file_name.split(".").splice(-1,1)[0].toLowerCase();

// for(var i = 0; i < ext_allow.length; i++) {
// if(file_ext == ext_allow[i]) {
// if(file_size <= size_allow) {
// error_file = 0;
// }
// }
// }
// }
// }

// for(var i = 0; i < el_field.length; i++) { // если поле присутствует в списке обязательных        
// if($(this).attr("name") == el_field[i]) { //проверяем поле формы на пустоту

// if($(this).attr("name") != "el_email") {
// if(!$(this).val()){// если в поле пусто
// error = 1; // определяем индекс ошибки
// }
// } else {
// var mailRegExp = /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,6}$/;
// if(!mailRegExp.test($(this).val())) {
// error = 1; // определяем индекс ошибки
// }
// } 
// }
// }

// });

// // alert('ПОСЛЕ проверки error = ' + error);
// // alert('ПОСЛЕ проверки error_file = ' + error_file);

// if(error == 0 && error_file == 0){ // если ошибок нет то отправляем данные
// return true;
// } else {
// if(error == 1) {
// var err_text = "Проверьте, пожалуйста, правильность заполения всех полей!";
// $(".el_error").html(err_text); 
// $(".el_error").fadeIn(); 
// }
// if(error_file == 1) {
// var err_file_text = "Файл слишком большого размера или не того формата!";
// $(".el_error_file").html(err_file_text); 
// $(".el_error_file").fadeIn(); 
// }

// return false; //если в форме встретились ошибки, не позволяем отослать данные на сервер
// }
// });  