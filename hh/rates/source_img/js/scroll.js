window.addEventListener('load', function() {	

	let container = document.querySelector('.blog__scrollbar-container');
	let scroll = document.querySelector('.blog__scrollbar');
	let content = document.querySelector('.blog__list');

	content.addEventListener('scroll', function(e) {
		scroll.style.height = container.clientHeight * content.clientHeight / content.scrollHeight + "px"; // длина(т.е. высота) scroll'а
		scroll.style.top = container.clientHeight * content.scrollTop / content.scrollHeight + "px"; // смещение scroll'а по высоте
	});
	
	/*let event = new Event('scroll');

	window.addEventListener('resize', content.dispatchEvent.bind(content, event));
	content.dispatchEvent(event);*/

	scroll.addEventListener('mousedown', function(start) {
		start.preventDefault();
		let y = scroll.offsetTop;
		let onMove = function(end) {
			let delta = end.pageY - start.pageY;
			scroll.style.top = Math.min(container.clientHeight - scroll.clientHeight, Math.max(0, y + delta)) + 'px';
			content.scrollTop = (content.scrollHeight * scroll.offsetTop / container.clientHeight);
		};
		document.addEventListener('mousemove', onMove);
		document.addEventListener('mouseup', function() {
			document.removeEventListener('mousemove', onMove);
		});
	});
});

	
