jQuery(document).ready(function($) {	
	
	$('#contact-form').submit(function() {		
		return false;
	});

	$('input, textarea').focus(function() {
		$('.form__result').removeClass('form__result--show');
	});

	// click ESC
	window.addEventListener('keydown', function (e) {
		if (e.which == 27) {
			$('.form__result').removeClass('form__result--show');
		}
	})	
	
	// Mask Time
	$.mask.definitions['f'] = "[0|1]";
	$.mask.definitions['s'] = "[0|1|2|3|4|5]";
	$.mask.definitions['p'] = "[a|p]";
	$('#form__project_time').mask("f9:s9 pm" );

	// DatePicker Jquery
	$("#form__project_date").datepicker();
	$.datepicker.regional['en'] = {		
		dateFormat: 'dd.mm.yy'
	};
	$.datepicker.setDefaults($.datepicker.regional['en']);


	// validate form
	$.validator.addMethod(
	    "validDate",
	    function(value, element) {
	        // put your own logic here, this is just a (crappy) example
	        return this.optional(element) || value.match(/^\d\d?\.\d\d?\.\d\d\d\d$/);
	    }
	);

	$('#contact-form').validate({
		rules: {
			form__name                : {required: true, minlength: 3},
			form__phone               : {required: true},
			form__email               : {required: true, email : true},			
			form__project_time        : {required: false, time12h: true},
			form__project_date        : {required: false, validDate: true}
		},
		messages: {
			form__project_time : {time12h: 'Format <b>12-hour am/pm</b>'},
			form__project_date : {validDate: 'Format <b>dd.mm.yyyy</b>.'},
		},
		submitHandler: function(form) {
			sendAjaxForm('form__result', 'contact-form', 'action_ajax_form.php');
		}
	});

	

	
});
