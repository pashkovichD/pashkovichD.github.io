jQuery(document).ready(function($) {	
	
	$('#contact-form').submit(function(e) {		
		e.preventDefault();
		sendAjaxForm('form__result', 'contact-form', 'action_ajax_form.php');
		return false;
	});	

	$("#form__phone").mask('9(999)999-99-99');
});
