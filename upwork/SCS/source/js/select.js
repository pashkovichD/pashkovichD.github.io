// jQuery(document).ready(function($) {

// 	const selectAge = document.querySelector('.select');
// 	const selectAge_title = selectAge.querySelector('.select__title');
// 	const selectAge_labels = selectAge.querySelectorAll('.select__label');
// 	var item = document.querySelector('.form__item--select');
// 	var placeholder = document.querySelector('.select__placeholder');
// 	var arrow = document.querySelector('.select__arrow');

// 	var input = document.querySelector('.select__title, .select__placeholder');
// 	// var itemBefore = document.querySelector('.form__item--select::before');

// 	/*item.addEventListener('click', function() {
// 	  alert('OK');
// 	});*/

// 	// itemBefore.addEventListener('click', function (e) {
// 	// 	e.preventDefault();	
// 	// 	alert('OK');
// 	// });

// 	// Toggle menu
// 	input.addEventListener('click', () => {
// 	// selectAge_title.addEventListener('click', () => {
	  
// 	  if ('active' === selectAge.getAttribute('data-state')) {	    
// 	    arrow.classList.remove('select__arrow--up');
// 	    arrow.classList.add('select__arrow--down');
// 	    selectAge.setAttribute('data-state', '');
// 	  } else {
// 	  	arrow.classList.remove('select__arrow--down');
// 	  	arrow.classList.add('select__arrow--up');
// 	    selectAge.setAttribute('data-state', 'active');
// 	  }
// 	});

// 	// Close when click to option
// 	for (let i = 0; i < selectAge_labels.length; i++) {
// 	  selectAge_labels[i].addEventListener('click', (evt) => {
// 	  	placeholder.style.display='none';
// 	    selectAge_title.textContent = evt.target.textContent;
// 	    selectAge.setAttribute('data-state', '');
// 	  });
// 	}

// 	// Reset title
// 	/*const reset = document.querySelector('.reset');
// 	reset.addEventListener('click', () => {
// 	  selectSingle_title.textContent = selectSingle_title.getAttribute('data-default');
// 	});*/

// });

jQuery(document).ready(function($) {
	var selectAge = $('.select');	
	var arrow = $('.select__arrow');
	var selectLabel = $('.select__label');

	$('.select__title, .select__placeholder').on('click', function() {
		
		var selectTitle = $('.select__title');
		var parent = $(this).parent();
		var h = parent.children('.select__title').outerHeight() + 2; // + border		
		parent.children('.select__content').css('top', h + 'px');

		if ('active' === parent.attr('data-state')) {
			parent.removeClass('select--open');
			parent.addClass('select--close');
			parent.children('.select__arrow').attr('class', 'select__arrow select__arrow--down'); //for SVG
			parent.attr('data-state', '');
		} else {

			selectAge.addClass('select--close');
			selectAge.removeClass('select--open');
			selectAge.attr('data-state', '');
			arrow.attr('class', 'select__arrow select__arrow--down'); //for SVG

			

			parent.removeClass('select--close');
			parent.addClass('select--open');			
			parent.children('.select__arrow').attr('class', 'select__arrow select__arrow--up'); // for SVG
			parent.attr('data-state', 'active');
		}
	});	

	selectLabel.on('click', function(evt) {		
		var parent = $(this).parent().parent();

		parent.removeClass('select--open');
		parent.addClass('select--close');
		parent.children('.select__placeholder').css('display', 'none');
		parent.children('.select__arrow').attr('class', 'select__arrow select__arrow--down'); //for SVG
		parent.children('.select__title').text($(this).text());
		parent.attr('data-state', '');
	});
});