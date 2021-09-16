jQuery(document).ready(function($) {	
	
	$('#contact-form').submit(function() {
		// $('.form__result').text('').removeClass('form__result--show');
		// alert(ok);
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
	
	// DatePicker Jquery
	$("#form__move_date").datepicker();
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
			form__move_time           : {required: false, time12h: true},
			form__move_date           : {required: false, validDate: true}
		},
		messages: {
			form__move_time : {time12h: 'Format <b>12-hour am/pm</b>'},
			form__move_date : {validDate: 'Format <b>dd.mm.yyyy</b>.'},
		},
		submitHandler: function (form) {
	        // add a loading image in place of your returning outcome
	        // $("#simple-msg").html("Sending...");
	        // serialize/combine all submitted fields into an array
	        var postData = $('#contact-form').serialize();
	        // set url based of action
	        var formURL = $('#contact-form').attr("action");	        
	        $.ajax({
	                type: "POST",
	                url: formURL,
	                data: postData,
	                success:function(data, textStatus, jqXHR) {
	                   $("#simple-msg").html('<p>Thanks for your request - we will be in touch soon!</p>');
	                },
	                error: function(jqXHR, textStatus, errorThrown) {
	                   $("#simple-msg").html('<p>Message failed to send. Please try again!</p>');
	                }
	            });
	        $('.form__result').text('Successfully!').addClass('form__result--show');

			$(document).mouseup(function (e){ // click on web document
				var div = $('.form__result'); // ID or class element
				if (!div.is(e.target) // if the click was not on the element
				    && div.has(e.target).length === 0) { // and not by its children
					div.removeClass('form__result--show');
				}
			});
		}
		/*submitHandler: function() {
			$('.form__result').text('Successfully!').addClass('form__result--show');

			$(document).mouseup(function (e){ // click on web document
				var div = $('.form__result'); // ID or class element
				if (!div.is(e.target) // if the click was not on the element
				    && div.has(e.target).length === 0) { // and not by its children
					div.removeClass('form__result--show');
				}
			});
		}*/
	});

	

	
});
