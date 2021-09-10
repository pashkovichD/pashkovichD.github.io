jQuery(document).ready(function($) {	
	
	$('#contact-form').submit(function() {
		// $('.form__result').text('').removeClass('form__result--show');
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

			$(document).mouseup(function (e){ // click on web document
				var div = $('.form__result'); // ID or class element
				if (!div.is(e.target) // if the click was not on the element
				    && div.has(e.target).length === 0) { // and not by its children
					div.removeClass('form__result--show');
				}
			});
		}
	});

	

	
});
