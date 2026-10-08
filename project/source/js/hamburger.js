var hamburger = document.querySelector('.page-header__toggle-nav');
var nav = document.querySelector('.page-header__nav');

hamburger.addEventListener('click', function (e) {
	e.preventDefault();

	this.classList.toggle('hamburger__click');
	if(this.classList.contains('hamburger__click')) {
		nav.classList.add('page-header__nav--show');		
	} else {
		nav.classList.remove('page-header__nav--show');
	}

	if(nav.classList.contains('active')) {
		console.log('YES');
		nav.classList.add('esc');
		setTimeout(function() {
            nav.classList.remove('active');
            nav.classList.remove('esc');
        }, 850);
	} else {
		console.log('NO');
		nav.classList.add('active');
	}
});