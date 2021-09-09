jQuery(document).ready(function($) {	
	$('#contact-form').validate({
		rules: {
			form__name: {
				required: true,
				form__name: true
			},
			form__phone: {
				required: true,
				form__phone: true
			},
			form__email : {
				required: true,
				form__email : true
			}
		},
		messages: {
			form__email: {
				required: 'Поле email обязательно для заполнения'
			// },
			// name: {
			// 	required: 'Имя обязательно должно быть заполнено',
			// 	minlength: 'Длина имени должна быть не менее 3-х символов'
			// }
		},
		submitHandler: function() {
			alert('OK');
		}
	});
});
