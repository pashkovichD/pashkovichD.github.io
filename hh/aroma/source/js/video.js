var playButton = document.querySelector('.promo__play');
var video = document.querySelector('.promo__video video');
var description = document.querySelector('.promo__video-desc');

playButton.addEventListener('click', function (e) {
	e.preventDefault();
	video.play();
});

video.addEventListener('play', function (e) {
	playButton.classList.add('promo__play--hide');
	description.classList.add('promo__video-desc--hide');
});

video.addEventListener('click', function (e) {
	if(video.paused) {
		video.play();
	} else {
		video.pause();
		playButton.classList.remove('promo__play--hide');
		description.classList.remove('promo__video-desc--hide');
	}	
});