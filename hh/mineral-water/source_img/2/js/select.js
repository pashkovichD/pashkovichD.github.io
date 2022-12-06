jQuery(document).ready(function($) {
	var selectAge = $('.select');	
	// var arrow = $('.select__arrow');
	var selectLabel = $('.select__label');

	$('.select__title, .select__placeholder').on('click', function() {
		var selectTitle = $('.select__title');
		var parent = $(this).parent();
		var h = parent.children('.select__title').outerHeight() + 2; // + border		
		parent.children('.select__content').css('top', h + 'px');

		if ('active' === parent.attr('data-state')) {
			parent.removeClass('select--open');
			parent.addClass('select--close');
			// parent.children('.select__arrow').attr('class', 'select__arrow select__arrow--down'); //for SVG
			parent.attr('data-state', '');
		} else {
			selectAge.addClass('select--close');
			selectAge.removeClass('select--open');
			selectAge.attr('data-state', '');
			// arrow.attr('class', 'select__arrow select__arrow--down'); //for SVG
			parent.removeClass('select--close');
			parent.addClass('select--open');			
			// parent.children('.select__arrow').attr('class', 'select__arrow select__arrow--up'); // for SVG
			parent.attr('data-state', 'active');
		}
	});	

	selectLabel.on('click', function(evt) {		
		var parent = $(this).parent().parent();

		parent.removeClass('select--open');
		parent.addClass('select--close');
		parent.children('.select__placeholder').css('display', 'none');
		// parent.children('.select__arrow').attr('class', 'select__arrow select__arrow--down'); //for SVG
		parent.children('.select__title').text($(this).text());
		parent.attr('data-state', '');
	});
});