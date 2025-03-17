var videoWrapper = document.querySelectorAll('.video__wrapper');

videoWrapper.forEach((el) => {
	var btn = el.querySelector('.play');
	var video = el.querySelector('video');

	btn.addEventListener('click', function (e) {
		e.preventDefault();
		video.play();
	});

	video.addEventListener('play', function (e) {
		btn.classList.add('play--hide');	
	});

	video.addEventListener('click', function (e) {
		if(video.paused) {
			video.play();
		} else {
			video.pause();
			btn.classList.remove('play--hide');
		}	
	});
});