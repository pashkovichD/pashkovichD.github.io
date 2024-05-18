window.addEventListener('load', function() {	
	let intro1 = document.querySelector('.intro-1');
	let intro1Title = intro1.querySelector('h3');
	let intro2 = document.querySelector('.intro-2');
	let intro2Title = intro2.querySelector('h3');

	intro1Title.addEventListener('click', function() {
		intro1.classList.remove('intro-1__hide');
		intro2.classList.add('intro-2__hide');
	});

	intro2Title.addEventListener('click', function() {
		intro2.classList.remove('intro-2__hide');
		intro1.classList.add('intro-1__hide');
	});
});
