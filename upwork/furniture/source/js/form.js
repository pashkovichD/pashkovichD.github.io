jQuery(document).ready(function($) {	
	
	$('#contact-form').submit(function() {
		// $('.form__result').text('').removeClass('form__result--show');
		return false;
	});

	$('input, textarea').focus(function() {
		$('.form__result').text('').removeClass('form__result--show');
	});	

	$.validator.addMethod(
	    "validDate",
	    function(value, element) {
	        // put your own logic here, this is just a (crappy) example
	        return value.match(/^\d\d?\.\d\d?\.\d\d\d\d$/);
	    },
	    "Format <b>dd.mm.yyyy</b>."
	);

	$('#contact-form').validate({
		rules: {
			form__name                : {required: true, minlength: 3},
			form__phone               : {required: true},
			form__email               : {required: true, email : true},
			form__pickup_address      : {required: true},
			form__pickup_access       : {required: true},
			form__destination_address : {required: true},
			form__destination_access  : {required: true},
			form__move_time           : {required: true, time: true},
			form__move_date           : {required: true, validDate: true}
		},
		messages: {
			form__move_time : {time: 'Between <b>00:00 - 23:59</b>.'},
		},
		submitHandler: function() {			
			$('.form__result').text('Successfully!').addClass('form__result--show');
			// setTimeout($('.form__result').text('').removeClass('form__result--show'), 5000);
		}
	});
});
