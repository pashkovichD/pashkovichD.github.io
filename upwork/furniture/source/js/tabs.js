jQuery(document).ready(function($) {
	
	$('#tabs__content1').css('display', 'block');
	$('.tabs__input:first').addClass('tabs__input--active');
	$('.tabs__input').on('click', function(e) {
		
		var clickId = $(this).attr('id');
		
		var num = clickId.substr(3);
		$('.tabs__section').hide();
		$('#tabs__content' + num).css('display', 'block');		
		$('.tabs__input').removeClass('tabs__input--active');
		$(this).addClass('tabs__input--active');
	});
});
